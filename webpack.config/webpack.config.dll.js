const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    performance: {
        hints: false
    },
    mode: 'production',
    entry: {
        vendor: ['react', 'react-dom', 'antd',]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/dll'),
        library: '[name]'
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns:['*.txt'] 
        }),
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname, '../dist/dll', 'manifest.json')
        })
    ]
}