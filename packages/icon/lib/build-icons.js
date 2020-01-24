const fs = require('fs-extra');
const path = require('path');

const chalk = require('chalk');

async function writeIcons() {
  let icons = require('./icon-src');
  let keys = Object.keys(icons);
  await Promise.all(
    keys.map(async key => {
      let pathObj =
        typeof icons[key] === 'string'
          ? {
              d: icons[key],
            }
          : icons[key];
      let pathStr = '';
      for (let objKey in pathObj) {
        pathStr += ` ${objKey}=${JSON.stringify(pathObj[objKey])}`;
      }
      await fs.writeFile(
        path.join(__dirname, '..', 'src', 'icons', key + '.tsx'),
        `/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const ${key} = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path${pathStr} />
    </Icon>
  )
);
${key}.displayName = '${key}';
`
      );
    })
  );
  return keys;
}

/**
 * Insert an array of icons into a tsx export file
 *
 * @param  {array}  icons     - An array of icons
 * @param  {string} indexPath - The path to the export file
 */
function insertIndex(icons, indexPath) {
  const index =
    `import { IconProps as _IconProps } from './Icon';\n\n` +
    icons.map(icon => `export { ${icon} } from './icons/${icon}';`).join('\n') +
    `\nexport type IconProps = _IconProps;\n`;

  try {
    fs.writeFileSync(path.normalize(`${process.cwd()}/${indexPath}`), index, {
      encoding: 'utf8',
    });
  } catch (error) {
    console.error(chalk.red(`❌ ${error}`));
    process.exit(1);
  }

  console.info(chalk.green('✅ Index file written successfully'));
}

/**
 * Write a package.json file
 *
 * @param  {string} pkgPath - The path to the package.json
 * @param  {object} content - The content of the package.json as an object
 *
 * @return {boolean}        - True or false
 */
function writePkg(pkgPath, content) {
  try {
    fs.ensureFileSync(pkgPath);
    fs.writeFileSync(pkgPath, JSON.stringify(content, null, 2) + '\n', {
      encoding: 'utf8',
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
function insertPkg(icons, pkgPath) {
  pkgPath = path.normalize(`${process.cwd()}/${pkgPath}`);
  const pkg = require(pkgPath);

  pkg.preconstruct.entrypoints = ['.', ...icons];

  writePkg(pkgPath, pkg);

  console.info(chalk.green('✅ package.json file written successfully'));
}

/**
 * Fix the source key inside each icons package.json file
 *
 * @param  {array} icons - An array of all icons
 */
function fixSource(icons) {
  icons.forEach(icon => {
    const pkgPath = path.normalize(`${process.cwd()}/${icon}/package.json`);

    writePkg(pkgPath, {
      main: 'dist/icon.cjs.js',
      module: 'dist/icon.esm.js',
      preconstruct: {
        source: `../src/icons/${icon}`,
      },
    });
  });

  console.info(chalk.green('✅ all package.json files written successfully'));
}

console.info(chalk.blue('🚧 Building icon exports'));

writeIcons().then(icons => {
  insertIndex(icons, 'src/index.tsx');
  insertPkg(icons, 'package.json');
  fixSource(icons);

  console.info();
});
