# RxJS Test Cases
RxJS boilerplate for test cases.

1. Create a test case file (JavaScript file) based on the template (template.js).
2. Add RxJS code into the wrapper (replace placeholder).
3. Import created test case file into the imports.js.
4. Run script (```npm start```).

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
// place RxJS imports here

export function run() {

// place your RxJS code here

};
```