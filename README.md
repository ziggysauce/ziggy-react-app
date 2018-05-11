# Ziggy Fullstack React App Boilerplate
Simple setup for fullstack react/express/node applications


[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?)](https://github.com/ziggysauce/ziggy-react-app/pulls)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/ziggysauce/ziggy-react-app/blob/master/LICENSE)
[![node](https://img.shields.io/badge/node-v9.4.0-brightgreen.svg)](https://nodejs.org/en/)
[![npm](https://img.shields.io/badge/npm-v5.6.0-blue.svg)](https://www.npmjs.com/)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Starting%20a%20new%20react%20app%20using%20ziggy-react-app!&url=https://github.com/ziggysauce/ziggy-react-app&via=ziggysauce&hashtags=react,boilerplate,webpack,babel,sass)


## Table of Contents
* [Quick Start](#quick-start)
* [Requirements](#requirements)
* [What's Included](#whats-included)
* [Instructions](#instructions)
* [Contributing](#contributing)

## Quick Start
* Clone or download this repository  
  ```
  git clone https://github.com/ziggysauce/ziggy-react-app.git
  ```  
* In your terminal, navigate to the root directory  
  ```
  cd ziggy-react-app
  ```  
* Install dependencies  
  ```
  npm install
  ```

### Development
* Run script for development build:  
  ```
  npm run build:dev
  ```  
* In browser, application is served at `http://localhost:8080`

### Production
* Run script for production build:  
  ```
  npm run build:prod
  ```  
* Run script to start up app:  
  ```
  npm start
  ```  


## Requirements
* [Node](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)


## What's Included?
* [React](https://reactjs.org/) v16
* [Webpack](https://webpack.js.org/) v4
  * Chunk hash/caching
  * Source maps
  * Clean re-build of HTML file
    * [Clean Webpack Plugin](https://github.com/johnagan/clean-webpack-plugin)
    * [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)
  * Development Build
    * Hot module reload ([React Hot Loader](https://github.com/gaearon/react-hot-loader))
  * Production Build
    * Separate injected stylesheet ([Extract Text Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin))
    * JS Compression/Minification ([Uglify JS Plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin))
* [Babel](http://babeljs.io/)  
* [SASS](https://sass-lang.com/)  
* [Express](https://expressjs.com/)  
  * Middleware
    * [Body Parser](https://github.com/expressjs/body-parser)
    * [Cookie Parser](https://github.com/expressjs/cookie-parser) 
    * [Helmet](https://github.com/helmetjs/helmet)  
    * [Express Sessions](https://github.com/expressjs/session)  
    * [CORS](https://github.com/expressjs/cors)   
* [Jest](https://facebook.github.io/jest/)  
* [ESLint](https://eslint.org/) (AirBnB Rules)

```
ziggy-react-app/
├── client/
│    ├── dist/
│    ├── src/
│    │    ├── __tests__
│    │    │    ├── __snapshots__
│    │    │    └── app.test.js
│    │    ├── components/
│    │    │    ├── App.js
│    │    │    └── Credit.js
│    │    ├── styles/
│    │    │    ├── components/
│    │    │    │    └── _app.scss
│    │    │    ├── setup/
│    │    │    │    ├── _base.scss
│    │    │    │    └── _variables.scss
│    │    │    └── main.scss
│    │    ├── index.html
│    │    └── index.js
├── server/
│    └── server.js
├── .babelrc
├── .eslintrc.js
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── package.json
├── README.md
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```


## Instructions
* Frontend
  * Delete the `Credit.js` file
  * Edit the `App.js` file
  * Edit the `_app.scss` file
* Backend
  * Add a `.env` file to the root of your directory
    * Add the following code to your `.env` file:
      ```
      PORT=5000
      SESSION_SECRET=ziggy-session
      ```
    * Edit .env variables however you see fit
    * Removing a variable from here may require changes throughout the app where `process.env` is called
* Testing
  * Run `npm test` to start all jest testing
  * Run `npm run test:verbose` to see jest testing details
  * Run `npm run test:coverage` to create coverage directory
    * Run `open coverage/lcov-report/index.html` to see jest testing coverage

## Contributing
This react app boilerplate is open source. Any feedback, issues, contributions, and requests are appreciated and encouraged.  

For more information:  
[Contributing Instructions](https://github.com/ziggysauce/ziggy-react-app/blob/master/CONTRIBUTING.md)  
[License](https://github.com/ziggysauce/ziggy-react-app/blob/master/LICENSE)  

If you found this repository helpful, please give me a follow and star this repository. Thanks for all the support!