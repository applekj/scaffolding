const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');
const ip = require('ip');
const path = require('path')
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        host: ip.address(),//获取当前项目的ip地址
        port: 3000,
        open: true,
        hot: true,
        contentBase: path.resolve(__dirname, '../dist'),//指定静态服务目录
        historyApiFallback: true,//若果找不到资源，返回首页（静态服务目录的index.html，可以设置）
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        before: app => {
            app.get('/api/address', (req, res) => {
                setTimeout(() => {
                    res.json([
                        {
                            key: '1',
                            name: '胡彦斌',
                            age: 32,
                            address: '西湖区湖底公园1号',
                        },
                        {
                            key: '2',
                            name: '胡彦祖',
                            age: 42,
                            address: '西湖区湖底公园1号',
                        },
                    ])
                }, 2000);
            })
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            DEV: `'dev'`
        }),
    ]
})