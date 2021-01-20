const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.min.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: "img/",
                        name: "[name].[ext]"
                    }
                }]
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: "fonts/",
                        name: "[name].[ext]",
                    }
                }]
            },
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ]
}