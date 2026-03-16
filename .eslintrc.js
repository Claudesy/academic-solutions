// File: app/academic2/.eslintrc.js | Repo: abyss-v3
// Architected and built by Claudesy.

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ["@sentra/eslint-config"],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
