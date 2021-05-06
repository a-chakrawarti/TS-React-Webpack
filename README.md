## Install TypeScript on React Project using Webpack & Babel

1. Make a directory, `mkdir react-ts-webpack` and move into it, `cd react-ts-webpack`
2. Initialize the project using `npm init -y` which will generate a `package.json` file.
3. Make a "src" folder inside, `mkdir src` and move inside it.
4. Make a file `index.tsx`, using `touch index.tsx` inside the "src" folder.
5. Go back to the project root directory and add these files, `touch index.html webpack.config.js .babelrc`
   1. Babel is a plugin which is used to transpile our TypeScript code into JavaScript, also the react code into JavaScript.
   2. `index.html` will have the basic html 5 boilerplate with a `<div id=root></div>`, and a `<script src='bundle.js'></script>`.


6. Install following dependencies: 
   - @babel/core
   - @babel/preset-env
   - @babel/preset-react
   - @babel/preset-typescript
   - webpack
   - webpack-cli
   - webpack-dev-server
   - babel-loader
   - react
   - react-dom
   - @types/react
   - @types/react-dom

> For webpack-dev-server v4+, [check the following](https://github.com/webpack/webpack-dev-server#with-npm-scripts),


```json
// Instead of 
{
    "scripts": {
        "start" : "webpack-dev-server --open"
    }
}

// Do this
{
    "scripts" : {
        "start" : "webpack-serve --open"
    }
}
```