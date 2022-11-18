const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '../src/script.js'),
    output:
    {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins:
    [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            minify: true
        }),
        new MiniCSSExtractPlugin()
    ],
    module:
    {
        rules:
        
        [

            // HTML
            {
                test: /\.(html)$/,
                use: {
                    loader: "html-loader",
                    options: {
                      attrs: [":src"]
                    }
                
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },

            // CSS
            {
                test: /\.scss$/,
                use:
                [
                    
                    'style-loader',
                    'css-loader','sass-loader'
                ]
            },

            //Images
            {
                test: /\.(mp4|png|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                  outputPath: 'assets/images/',
                },
            },

        

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
              
                loader: 'file-loader',
                options: {
                  outputPath: 'assets/fonts/',
                },

            },

            //Xlsx
            { test: /\.xlsx$/, loader: "webpack-xlsx-loader",
            options:{
            outputPath:'assets/database'
        } },
    //     {
    //         test: /\.mp4$/,
    //         loader: 'file-loader',
    //         options:{
                
    //             outputPath:'assets/videos'
    //         }
    //  },
        ]
    }
}
