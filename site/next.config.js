const fs = require("fs");
const path = require("path");

const { withReckonConfig } = require("@elemental-ui/next-config");
const withMDX = require("@next/mdx")({
  // extension: /\.mdx?$/,
  extension: /README\.md/
});

module.exports = withReckonConfig(
  withMDX({
    pageExtensions: ["js", "md", "mdx", "tsx"],
    exportPathMap(defaultPathMap) {
      let pkgs = fs
        .readdirSync(path.join(__dirname, "..", "elemental-ui"), {
          withFileTypes: true
        })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      let pages = { ...defaultPathMap };
      delete pages["/component/[component]"];
      for (let pkg of pkgs) {
        pages[`/component/${pkg}`] = {
          page: "/component/[component]",
          query: { component: pkg }
        };
      }

      return pages;
    },
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /CHANGELOG\.md/,
        use: "raw-loader"
      });

      // Not running fs clientside
      if (!isServer) {
        config.node = {
          fs: "empty"
        };
      }
      config.resolve.alias["react"] = require.resolve("react");

      return config;
    }
  })
);
