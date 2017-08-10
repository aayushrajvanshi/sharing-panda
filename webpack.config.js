const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isProd = process.env.NODE_ENV === 'production';

const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{
        loader: 'css-loader'
    }, {
        loader: 'sass-loader'
    }]
});

const cssConfig = isProd ? cssProd : cssDev;

const entryDev = [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!uikit/dist/js/uikit.min.js',
    'script-loader!uikit/dist/js/uikit-icons.js',
    './src/app.jsx'
];

const entryProd = [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!uikit/dist/js/uikit.min.js',
    'script-loader!uikit/dist/js/uikit-icons.js',
    './src/app.jsx'
];

const entryConfig = isProd ? entryProd : entryDev;

module.exports = {
    entry: entryConfig,
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
            use: cssConfig
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
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/',
        compress: true,
        historyApiFallback: true,
        inline: true,
        hot: !isProd,
        port: 9000,
        stats: 'errors-only'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sharing Panda | India\'s Crowd Funding Website',
            filename: 'index.html',
            hash: false,
            template: 'src/index.html',
        }),
        new ExtractTextPlugin({
            filename: 'styles/app.[contenthash:6].css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            reportFilename: 'report.html',
            openAnalyzer: false,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};