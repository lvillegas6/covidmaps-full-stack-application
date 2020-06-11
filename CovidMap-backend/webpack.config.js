const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {

    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'api.covidmaps.media'),
        filename: 'server.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              keep_fnames: true
            }
          })
        ]
    },
    plugins: [
        new NodemonPlugin(),
    ],
}