# Workshops App v2
This app is built using HTML, CSS, JavaScript. It incorporates an MV* structure, JS design patterns, ES2015 features, and Sass.

## Setting up and using ESLint
- Install ESLint
```
npm i --save-dev eslint
```
- Create the ESLint configuration file. Choose Browser environment, style guide (AirBNB), include TypeScript support, choose JSON format for the file.
```
./node_modules/.bin/eslint --init
```
__NOTE__: Use backslashes on Windows
- Create a _.eslintignore_ file. Make sure to ignore all code except the ones you created as part of the app (ignore node_modules, Font Awesome folder, libs folder, dist folder etc.)
- Add a lint script to package.json. Also add one to automatically fix where possible the lint issues
```
"script" : {
    "lint": "eslint . --ext .js"
    "lint:fix": "eslint . --ext .js --fix"
}
```
- Run ESLint
```
npm run lint
```
Make necessary changes to the _rules_ section in _.eslintrc.json_ file as per your team's standards.