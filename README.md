# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
"# w17-coding-assignment" 
# Assignment Instructions:

## Coding Steps:
Using an online API of your choice, create a React project. You will be working on this for the next three weeks.
Project must meet the following criteria:
Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
Contain at least 10 custom components
Allow for all CRUD operations via one or more APIs

## Recommended API:
MockAPI - This is one of the most popular APIs with our mentors! 
Get more tips on CRUD with MockAPI!

You are free to use an API of your choosing; however, it must support all CRUD operations.

## Some additional APIs are the following:
https://github.com/ripienaar/free-for-dev#apis-data-and-ml
https://jsonplaceholder.typicode.com/
https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/

## Suggestion to alleviate CORS policy errors:
If you are having trouble accessing any of these APIs and you are getting a CORS policy error, try running your app on a live server.
You can install one via the command line:
npm install live-server -g
To run the live server, navigate to your project directory in the command line, then run live-server