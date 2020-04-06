var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var webpack = require('webpack');
module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.css$/, loader: ['style-loader', 'css-loader']},
            {test: /\.js$/, loader: 'babel-loader', include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/vue-echarts'), path.resolve(__dirname, 'node_modules/resize-detector')]},
            {test: /\.(woff|woff2|eot|ttf|otf)/, loader: 'file-loader'},
            {test: /\.(png|svg|jpg|gif)$/, loader: 'file-loader', options: { name: '[name].[ext]', esModule: false }}
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    devServer: {
        contentBase: 'dist',
        hot: true,
        port: 8000,
        open: false,
        historyApiFallback: false, //historyApiFallback设置为true那么所有的路径都执行index.html。
        overlay: true // 将错误显示在html之上
      },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: '',
            template: path.resolve(__dirname, 'index.html')
        })
    ],
  };