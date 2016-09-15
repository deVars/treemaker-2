'use strict'
const path = require(`path`),
      webpack = require(`webpack`);
const BANNER = `Simple Patcher Tree-maker 2\n` + 
  `Roseller M. Velicaria, Jr.\n` + 
  `github.com/devars\n` + 
  `${new Date()}`;
const ROOT_PATH = path.resolve('./');
const BABEL_LOADER = 'babel?presets[]=es2015&plugins[]=babel-plugin-add-module-exports';

let config = {
      entry: './src/index.js',
      output: {
        path: __dirname,
        filename: 'dist/main.js'
      },
      module: {
        loaders: [
          getFontLoaders(),
          getCSSLoaders(),
          getMSXLoaders(),
          getJSLoaders(),
          getJSONLoaders()
        ]
      },
      plugins: [
        new webpack.BannerPlugin(BANNER, {entryOnly: true}),
        new webpack.DefinePlugin({
          DEV_MODE: JSON.stringify(process.env.NODE_ENV === `DEV`)
        })
      ],
      jshint: {
        node: true,
        predef: [`window`, `DEV_MODE`]
      }
    };

if (process.env.NODE_ENV === `PROD`) {
  config.plugins.push(new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({compress:{}})
  );
}

if (process.env.NODE_ENV === `DEV`) {
  config.devtool = `source-map`;
}

function getCSSLoaders() {
  return {
    test: /\.css$/,
    loaders: ['style', 'css']
  };
}

function getJSLoaders() {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: ['jshint', BABEL_LOADER]
  };
}

function getJSONLoaders() {
  return {
    test: /\.json$/,
    exclude: /node_modules/,
    loaders: ['json']
  };
}

function getMSXLoaders() {
  return {
    test: /\.msx.html$/,
    exclude: /node_modules/,
    loaders: ['jshint', BABEL_LOADER, 'dv-msx-loader']
  };
}

function getFontLoaders() {
  return {
    test: /\.(eot|woff2?|svg|ttf)(\?v=\d\.\d\.\d)?/,
    loaders: ['file?name=dist/[sha512:hash:base64].[ext]']
  }
}

module.exports = config;