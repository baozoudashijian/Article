const path = require('path')
const HtmlWebpackPlugin =  require("html-webpack-plugin");

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js",
        publicPath: "./"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    })],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        openPage: 'index.html',
        host: 'localhost',
        port: '3001',
        open: true,
        hot: true,
        inline: true,
        compress: true
    }

}