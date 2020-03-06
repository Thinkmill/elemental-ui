module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      { development: process.env.NODE_ENV === "development" }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime",
    "babel-plugin-macros"
  ]
};
