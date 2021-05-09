// vue.config.js
const path = require('path');


module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // config.module
            //     .rule('css')
            //     .use('css-loader')
            //     .loader('css-loader')
            //     .options({
            //         lessOptions: {
            //             /**less-loader 配置 */
            //             strictMath: true,
            //             noIeCompat: true
            //         }
            //     })
            return {
                resolve: {
                    alias: {
                        '@js': path.resolve(__dirname, './src/assets/js'),
                        '@css': path.resolve(__dirname, './src/assets/css'),
                        '@img': path.resolve(__dirname, './src/assets/img'),
                        '@c': path.resolve(__dirname, './src/components'),
                    }
                }


            }
        }
    }
}