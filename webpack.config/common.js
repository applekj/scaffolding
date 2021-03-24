const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name][fullhash:8].js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        alias: {
            "@": `${path.resolve(__dirname, '../')}`,
            "createState": `${path.resolve(__dirname, '../src/common/createState')}`
        },
        extensions: ['.js', '.jsx', '.less', '.css'],
        modules: [
            path.resolve(__dirname, '../node_modules'),
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxSize: 244 * 1024,
            maxInitialRequests: 5
        },
        minimizer: [
            `...`,
            new CssMinimizerPlugin() //压缩css
        ]
    },
    module: {
        rules: [
            {
                test: /\.(le|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer'),
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8 * 1024,
                        name: 'img/[name][fullhash:8].[ext]',
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: 'fonts/'
                }
            },
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, '../node_modules'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }], //支持es6的修饰符
                            ["@babel/plugin-proposal-class-properties", { "loose": true }], //支持es6的clsss写法
                            ["@babel/plugin-transform-runtime"],
                            ['import', {
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "css" // `style: true` 会加载 less 文件
                            }]
                        ]
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            //打包前删除一次文件
            cleanOnceBeforeBuildPatterns: ['js', 'css', 'img', 'fonts', '*.txt', '*.html', '*.js', '*.css'],
            cleanAfterEveryBuildPatterns: ['*.txt']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../assets/index.html'),
            title: '福禄网络',
            favicon: path.resolve(__dirname, '../assets/images/favicon.ico'),
            minify: {
                removeAttributeQuotes: true,//移除属性的双引号(有的属性有逗号，不能完全删除)
                collapseWhitespace: true //折叠成一行
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id][fullhash:8].css',//异步加载的样式文件命名
            ignoreOrder: true //禁止顺序检查
        }),
        new webpack.ProvidePlugin({
            _: 'lodash'//给每个模块注入lodash,输出_
        }),
        new CopyPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname, '../project.config/reqrcode.js'),
                    to: path.resolve(__dirname, '../dist'),
                }
            ]
        }),
        // new webpack.DllReferencePlugin({
        //     manifest: path.resolve(__dirname, '../dist/dll/manifest.json')
        // }),
    ]
}