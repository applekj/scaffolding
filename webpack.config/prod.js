const { merge } = require('webpack-merge');
const common = require('./common');

module.exports = merge(common,{
    mode:'production',
    // watch:true,
    // watchOptions:{
    //     poll:1000,
    //     aggregateTimeout:500,
    //     ignored:/node_modules/
    // }
})