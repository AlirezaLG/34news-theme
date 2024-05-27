module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react"],
  rules: {
    // Add any custom rules here
    "react/no-unknown-property": [
      "error",
      { ignore: ["strokeLinejoin", "strokeWidth", "fillOpacity"] },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
