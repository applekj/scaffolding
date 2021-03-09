const { merge } = require('webpack-merge');
const common = require('./common');
const ip = require('ip');
const path = require('path')
const webpack = require('webpack')
const bodyParser = require("body-parser");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
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
            app.use(bodyParser.json());
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
            app.get('/api/login', (req, res) => {
                setTimeout(() => {
                    res.json({
                        code: 0,
                        data: null,
                        message: '登录成功'
                    })
                }, 2000);
            })
            app.post('/api/getChartData', (req, res) => {
                const { con1, con2, con3 } = req.body
                if (con1 && con2 && con3) {
                    setTimeout(() => {
                        res.json({
                            code: 0,
                            data: [
                                { year: '2001', population: 41.8 },
                                { year: '2002', population: 38 },
                                { year: '2003', population: 33.7 },
                                { year: '2004', population: 30.7 },
                                { year: '2005', population: 25.8 },
                                { year: '2006', population: 31.7 },
                                { year: '2007', population: 33 },
                                { year: '2008', population: 46 },
                                { year: '2009', population: 38.3 },
                                { year: '2010', population: 28 },
                                { year: '2011', population: 42.5 },
                                { year: '2012', population: 30.3 },
                            ],
                            message: '获取成功'
                        })
                    }, 2000);
                } else {
                    res.json({
                        code:10010,
                        data:'',
                        message:'请输入请求参数'
                    })
                }
            })
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            DEV: `'dev'`
        }),
    ]
})