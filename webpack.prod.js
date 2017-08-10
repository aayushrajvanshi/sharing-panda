const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!uikit/dist/js/uikit.min.js',
        'script-loader!uikit/dist/js/uikit-icons.js',
        './src/app.jsx'
    ],
    externals: {
        jquery: 'jQuery',
        $: 'jQuery'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            })
        }, {
            test: /\.(js|jsx)$/,
            use: [{
                loader: 'babel-loader'
            }],
            exclude: /node_modules/
        }, {
            test: /\.(jpe?g|png|gif)$/i,
            use: [{
                loader: 'file-loader?hash=sha512&digest=hex&name=./images/[hash:9].[ext]'
            }, {
                loader: 'image-webpack-loader?bypassOnDebug=false'
            }]
        }, {
            test: /\.(woff|ttf|eot|woff2|svg)$/i,
            use: [{
                loader: 'file-loader?hash=sha512&digest=hex&name=./fonts/[name].[ext]'
            }]
        }]
    },
    resolve: {
        alias: {
            Actions: path.resolve(__dirname, 'src/actions/'),
            Reducers: path.resolve(__dirname, 'src/reducers/'),
            Constants: path.resolve(__dirname, 'src/constants/'),
            Firebase: path.resolve(__dirname, 'src/firebase/'),
            Images: path.resolve(__dirname, 'src/images/'),
            Components: path.resolve(__dirname, 'src/components/'),
            Containers: path.resolve(__dirname, 'src/containers/')
        },
        extensions: [".js", ".json", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sharing Panda | India\'s Crowd Funding Website',
            favicon: 'favicon.png',
            filename: 'index.html',
            hash: false,
            template: 'src/index.html',
        }),
        new ExtractTextPlugin({
            filename: 'styles/app.[contenthash:6].css',
            disable: false,
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};