const path = require('path'); 
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname,'./src/index.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'index.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
      rules:[
        { test: /\.css$/,use:['style-loader','css-loader'] },
        { test: /\.vue$/, use:'vue-loader' },
        { test: /\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader?limit=7777&name=[hash:8][name].[ext]'},
        { test: /\.(ttf|eot|svg|woff|woff2)$/, use:'url-loader'},
        {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
        {test: /\.less$/, use:['style-loader','css-loader','less-loader']}
      ]  
    }
}