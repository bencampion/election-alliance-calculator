// @ts-check
import js from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import { globalIgnores } from "eslint/config";
import * as importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import ymlPLugin from "eslint-plugin-yml";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  globalIgnores(["dist/**"]),
  {
    extends: [js.configs.recommended],
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/order": [
        "error",
        { alphabetize: { order: "asc", caseInsensitive: true } },
      ],
    },
  },
  {
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
  {
    files: ["scripts/**/*.ts"],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    extends: [
      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"],
      reactHooks.configs["recommended-latest"],
    ],
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    extends: [markdown.configs.recommended],
    files: ["**/*.md"],
    language: "markdown/gfm",
  },
  {
    extends: [json.configs.recommended],
    files: ["**/*.json"],
    ignores: ["package-lock.json"],
    language: "json/json",
  },
  {
    extends: [
      ymlPLugin.configs["flat/standard"],
      ymlPLugin.configs["flat/prettier"],
    ],
    files: ["**/*.{yml,yaml}"],
    rules: {
      "yml/no-empty-mapping-value": "off",
    },
  },
  eslintPluginPrettierRecommended,
);
