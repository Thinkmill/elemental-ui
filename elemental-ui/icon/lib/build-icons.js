const fs = require("fs-extra");
const path = require("path");
const util = require("util");
const chalk = require("chalk");
const camelcase = require("camelcase");
const octicons = require("octicons");
const { default: svgr } = require("@svgr/core");
const rimraf = util.promisify(require("rimraf"));

function svgTemplate(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  return template.ast`${imports}
import { makeIcon } from '../Icon';

const ${componentName} = makeIcon((${props})=> ${jsx});

${componentName}.displayName = "${componentName.name}";
${exports}
`;
}

async function writeIcons(svgStrings, outputDir) {
  // clear and recreate the output dir before we start
  await rimraf(outputDir);
  await fs.mkdir(outputDir, { recursive: true });

  const icons = await Promise.all(
    Object.keys(svgStrings).map(async componentName => {
      // Make the jsCode
      const jsCode = await svgr(
        svgStrings[componentName],
        {
          icon: true,
          // ref: true,
          // memo: true,
          titleProp: true,
          template: svgTemplate
        },
        { componentName }
      );

      // Write it out
      await fs.writeFile(
        path.join(outputDir, componentName + ".tsx"),
        jsCode,
        "utf8"
      );

      return componentName;
    })
  );
  return icons;
}

/**
 * Insert an array of icons into a tsx export file
 *
 * @param  {array}  icons     - An array of icons
 * @param  {string} indexPath - The path to the export file
 */
async function insertIndex(icons, indexPath) {
  const index =
    `import { IconProps as _IconProps } from './Icon';\n\n` +
    icons
      .map(icon => `export { default as ${icon} } from './icons/${icon}';`)
      .join("\n") +
    `\nexport type IconProps = _IconProps;\n`;

  try {
    await fs.writeFile(indexPath, index, {
      encoding: "utf8"
    });
  } catch (error) {
    console.error(chalk.red(`❌ ${error}`));
    process.exit(1);
  }

  console.info(chalk.green("✅ Index file written successfully"));
}

/**
 * Write a package.json file
 *
 * @param  {string} pkgPath - The path to the package.json
 * @param  {object} content - The content of the package.json as an object
 *
 * @return {boolean}        - True or false
 */
async function writePkg(pkgPath, content) {
  try {
    await fs.ensureFile(pkgPath);
    await fs.writeFile(pkgPath, JSON.stringify(content, null, 2) + "\n", {
      encoding: "utf8"
    });
  } catch (error) {
    console.error(chalk.red(`❌ ${error}`));
    process.exit(1);
  }

  return true;
}

/**
 * Insert an array of icons into the preconstruct entrypoint array of a package.json
 *
 * @param  {array}  icons   - An array of icons
 * @param  {string} pkgPath - The path to the package.json file
 */
async function insertPkg(icons, pkgPath) {
  const pkg = require(pkgPath);

  if (!pkg.preconstruct) pkg.preconstruct = {};
  pkg.preconstruct.entrypoints = [".", ...icons];

  await writePkg(pkgPath, pkg);

  console.info(chalk.green("✅ package.json file written successfully"));
}

/**
 * Fix the source key inside each icons package.json file
 *
 * @param  {array} icons - An array of all icons
 */
async function fixSource(icons) {
  await Promise.all(
    icons.map(icon => {
      const pkgPath = path.normalize(`${process.cwd()}/${icon}/package.json`);

      return writePkg(pkgPath, {
        main: "dist/icon.cjs.js",
        module: "dist/icon.esm.js",
        preconstruct: {
          source: `../src/icons/${icon}`
        }
      });
    })
  );

  console.info(chalk.green("✅ all package.json files written successfully"));
}

console.info(chalk.blue("🚧 Building icon exports"));

// This belongs in elemental-ui
// Create an object of { [componentName]: String(svg) }
const IconsInput = Object.keys(octicons).reduce((acc, key) => {
  const componentName = camelcase(key, { pascalCase: true });
  acc[componentName] = octicons[key].toSVG();
  return acc;
}, {});

const outputDir = path.join(__dirname, "../src/icons");
writeIcons(IconsInput, outputDir).then(icons => {
  return Promise.all([
    insertIndex(icons, path.resolve(__dirname, "../src/index.tsx")),
    insertPkg(icons, path.normalize(`${process.cwd()}/package.json`)),
    fixSource(icons)
  ]);
});
