/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

const tsRegex = /\.(ts|js)x?$/
const scssRegex = /\.s?[ac]ss$/
const fileRegex = /\.(png|svg|gif|jpe?g|ico)$/

module.exports = {

    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'covidmaps.media'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: tsRegex,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: scssRegex,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: fileRegex,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            favicon: './public/favicon.ico',
            manifest: './public/manifest.json',
            manify: true
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
}
