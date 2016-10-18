var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: []
    }
};