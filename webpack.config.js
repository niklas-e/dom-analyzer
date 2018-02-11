const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
            '~': path.resolve('src')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/content-scripts',
            to: './content-scripts'
        }])
    ]
}