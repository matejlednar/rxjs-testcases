# RxJS Test Cases
RxJS boilerplate for test cases.

1. Run script (```npm start```).
2. Create a test case file (JavaScript file) based on the template (template.js).
3. Add RxJS code into the wrapper (template.js placeholder).
4. Import created test case file into the imports.js.

## File structure
- src/testcases - place your test cases (JavaScript files) here,

## Prerequisites
- Node.js
- npm

## Installation
npm install

## Scripts

### Run a test case

```npm start```

## Files

##### imports.js

Import your test case file here. 
Comment (disable) unused imports (test case files).

##### *.js file (test case file with RxJS code)

Place your RxJS code inside the wrapper.
```
export function run() {

// place your RxJS code here

};
```