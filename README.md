# Ziggy React App Boilerplate
Simple setup for frontend react applications


[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?)](https://github.com/ziggysauce/ziggy-react-app/pulls)  
[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/ziggysauce/ziggy-react-app/blob/master/LICENSE)  
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Starting%20a%20new%20react%20app%20using%20ziggy-react-app!&url=https://github.com/ziggysauce/ziggy-react-app&via=ziggysauce&hashtags=react,boilerplate,webpack,babel,sass)  


## Table of Contents
* [Quick Start](#quick-start)
* [Requirements](#requirements)
* [What's Included](#whats-included)
* [Instructions](#instructions)
* [Contributing](#contributing)

## Quick Start
* Clone or download this repository
* In your terminal, navigate to the root directory
* Run `npm install` to install dependencies

### Development
* Run `npm start` for development build
* In browser, application is served at `http://localhost:8080/`

### Production
* Run `npm run build` for production build
* Run `open dist/index.html` to see application in browser


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

```
ziggy-react-app/
├── dist/
├── src/
│    ├── components/
│    │    ├── App.js
│    │    └── Credit.js
│    ├── styles/
│    │    ├── components/
│    │    │    └── _app.scss
│    │    ├── setup/
│    │    │    ├── _base.scss
│    │    │    └── _variables.scss
│    │    └── main.scss
│    ├── index.html
│    └── index.js
├── .babelrc
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
* Delete the `Credit.js` file
* Edit the `App.js` file
* Edit the `_app.scss` file


## Contributing
This react-app boilerplate is open source. Any feedback, issues, contributions, and requests are appreciated and encouraged.  

For more information:  
[Contributing Instructions](https://github.com/ziggysauce/ziggy-react-app/blob/master/CONTRIBUTING.md)  
[License](https://github.com/ziggysauce/ziggy-react-app/blob/master/LICENSE)  

If you found this repository helpful, please give me a follow and star this repository. Thanks for all the support!