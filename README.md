# Playwright Automation with JavaScript and TypeScript

This project demonstrates browser automation using Playwright in both JavaScript and TypeScript. Playwright is a powerful end-to-end testing framework that allows you to interact with web pages, perform actions like clicking buttons and typing into forms, and verify the behavior of web applications.

## Table of Contents

1. Introduction
2. Prerequisites
3. Installation
4. Running the Tests
5. Example Tests
   - JavaScript Example
   - TypeScript Example
6. Test Results
7. Conclusion

## Introduction

This project showcases how to use Playwright for automating web application tests. Playwright provides an easy-to-use API for interacting with modern web browsers and supports automation across Chrome, Firefox, and WebKit (Safari).

The project includes examples of simple tests written in JavaScript and TypeScript to demonstrate how automation works, including:

- Launching browsers
- Navigating between pages
- Interacting with page elements (like buttons, forms, and links)
- Asserting page content or behavior

## Prerequisites

To get started with this project, ensure you have the following software installed on your local machine:

- Node.js (>=v14)
- npm (comes with Node.js)
- Playwright
- TypeScript (for TypeScript tests)

## Installation

1. Clone the repository:

git clone https://github.com/your-username/playwright-automation.git cd playwright-automation

2. Install dependencies:

npm install

3. Install Playwright Browsers:

npx playwright install


## Running the Tests

### JavaScript Tests

To run the JavaScript tests, use the following command:

npm run test:js


### TypeScript Tests

To run the TypeScript tests, you need to compile them first. Use this command to run the TypeScript tests:

npm run test:ts


## Example Tests

### JavaScript Example

Here’s a simple example of a JavaScript test using Playwright:

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.title();
  console.log(title); // Should log "Example Domain"
  await browser.close();
})();

TypeScript Example
Here’s the same example written in TypeScript:

import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.title();
  console.log(title); // Should log "Example Domain"
  await browser.close();
})();


To run the TypeScript example, make sure your tsconfig.json is properly configured, and run:

npm run test:ts
Test Results

Once you run the tests, Playwright will open the browser, perform the actions, and print the results to the terminal.

You will see the page title printed, for example:

Example Domain


Conclusion
This project provides a simple and easy-to-understand setup for automating browser actions using Playwright in both JavaScript and TypeScript. You can extend the example tests to perform more complex actions, such as interacting with form elements, verifying page contents, and simulating user behavior.

For more information, check out the Playwright Documentation (https://playwright.dev/).
