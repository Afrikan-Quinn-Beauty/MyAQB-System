
import js from "@eslint/js";

export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**"
    ]
  },
  {
    files: ["**/*.js", "**/*.gs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        Logger: "readonly",
        SpreadsheetApp: "readonly",
        ScriptApp: "readonly",
        HtmlService: "readonly",
        PropertiesService: "readonly",
        LockService: "readonly",
        Utilities: "readonly",
        Session: "readonly",
        DriveApp: "readonly",
        GmailApp: "readonly",
        CalendarApp: "readonly",
        UrlFetchApp: "readonly",
        ContentService: "readonly",
        CacheService: "readonly",
        FormApp: "readonly",
        console: "readonly",
        google: "readonly",
        window: "readonly",
        document: "readonly"
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];
