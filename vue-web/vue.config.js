// vue.config.js
const path = require('path');


module.exports = {
    devServer: {
        disableHostCheck: true
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            return {
                resolve: {
                    alias: {
                        '@js': path.resolve(__dirname, './src/assets/js'),
                        '@css': path.resolve(__dirname, './src/assets/css'),
                        '@img': path.resolve(__dirname, './src/assets/img'),
                        '@c': path.resolve(__dirname, './src/components'),
                    }
                },
            }
        }
    },lintOnSave: false
}
