# Ziggy React App  
Simple boilerplate setup for fullstack react/express/node applications


[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?)](https://github.com/ziggysauce/ziggy-react-app/pulls)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/ziggysauce/ziggy-react-app/blob/master/LICENSE)
[![node](https://img.shields.io/badge/node-v10.1.0-brightgreen.svg)](https://nodejs.org/en/)
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
* Add a `.env` file to the root of your directory
  * Add the following code to your `.env` file:
    ```
    PORT=5000
    SESSION_SECRET=<your_session_secret_here>
    ```
  * Add your own `SESSION_SECRET` value
* Run script to start up app:  
  ```
  npm start
  ```  
* `prestart` script will run and create `dist` directory with production build


## Requirements
* [Node](https://nodejs.org/en/) (v9+)
* [NPM](https://www.npmjs.com/) (v5+)


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

### Directory Structure
```
ziggy-react-app/                           # application root directory
├── client/                                # frontend directory
│    ├── dist/                             # production code directory ignored by .gitignore file
│    ├── src/                              # development code directory
│    │    ├── __tests__                    # jest testing directory
│    │    │    ├── __snapshots__/          # jest snapshots directory (created after running tests)
│    │    │    └── app.test.js             # initial test file
│    │    ├── components/                  # react components directory
│    │    │    ├── App.js                  # initial App.js file
│    │    │    └── Credit.js               # author information; delete file after opening
│    │    ├── styles/                      # sass styles directory
│    │    │    ├── components/             # sass components directory
│    │    │    │    └── _app.scss          # initial styling for app component
│    │    │    ├── setup/                  # sass setup directory
│    │    │    │    ├── _base.scss         # base styling
│    │    │    │    └── _variables.scss    # sass variables
│    │    │    └── main.scss               # root sass file (import other files here)
│    │    ├── index.html                   # template HTML file
│    │    └── index.js                     # application entry point
├── server/                                # backend directory
│    ├── middleware/                       # server middleware directory
│    │    ├── cors.js                      # CORS middleware
│    │    ├── index.js                     # middleware configuration file
│    │    └── session.js                   # express-session middleware
│    └── server.js                         # express server entry point
├── .babelrc                               # babel configuration file
├── .eslintrc.js                           # eslint configuration file
├── webpack.common.js                      # base webpack configuration
├── webpack.dev.js                         # development build webpack configuration
└── webpack.prod.js                        # production build webpack configuration
```

### Command Scripts
| npm <script>   |                     Function/Description                              |
| -------------- | --------------------------------------------------------------------- |
| prestart       | Run webpack production build script before express server             |
| start          | Starts app on express server at `localhost:5000` with node            |
| serve          | Starts app on express server at `localhost:5000` with nodemon         |
| test           | Runs all tests files (`.test.js` type)                                |
| test:verbose   | Displays individuals test results                                     |
| test:coverage  | Collects test coverage information and reports output                 |
| build:dev      | Runs webpack developement build (HMR enabled) at `localhost:8080`     |
| build:prod     | Runs webpack production build (`dist` directory created)              |


## Instructions
* Frontend
  * Delete the `Credit.js` file
  * Edit the `App.js` file
  * Edit the `_app.scss` file
  * SASS styling:
    * Be sure to add an underscore `_` before new `.scss` files
    * Add new scss files to `main.scss` as an import (order matters)
* Backend
  * Add a `.env` file to the root of your directory
    * Add the following code to your `.env` file:
      ```
      PORT=5000
      SESSION_SECRET=<your_session_secret_here>
      ```
    * Add your own `SESSION_SECRET` value
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
