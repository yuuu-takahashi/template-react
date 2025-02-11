import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintConfig from "@typescript-eslint/eslint-plugin/configs";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  {
    extends: [
      js.configs.recommended,
      ...tseslintConfig.recommended,
      "plugin:react/recommended",
      "plugin:import/recommended",
      "plugin:jsx-a11y/recommended",
      "prettier",
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
      "unused-imports": unusedImports,
      "jsx-a11y": jsxA11y,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "unused-imports/no-unused-imports": "error",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  { ignores: ["dist"] }
);
