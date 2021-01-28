const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name][fullhash:8].js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        alias: {
            "@": `${path.resolve(__dirname, '../src')}`
        },
        extensions: ['.js', '.jsx'],
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
                                    // require('postcss-pxtorem')({
                                    //     rootValue: 18.75,
                                    //     unitPrecision: 5,
                                    //     propList: ['*']
                                    // })
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: path.resolve(__dirname, '../node_modules'),
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
                exclude: path.resolve(__dirname, '../node_modules'),
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: 'fonts/'
                }
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, '../src'),
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
        // new webpack.ProvidePlugin({
        //     _: 'lodash'//给每个模块注入lodash,输出_
        // }),
        // new webpack.DllReferencePlugin({
        //     manifest: path.resolve(__dirname, '../dist/dll/manifest.json')
        // }),
    ]
}