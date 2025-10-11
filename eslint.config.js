
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: "readonly",   
        process: "readonly",   
        require: "readonly"    
      }
    },
    rules: {
      semi: ["error", "always"],       
      quotes: ["warn", "double"],     
      "no-unused-vars": "warn",       
      "no-console": "off"             
    }
  }
];
