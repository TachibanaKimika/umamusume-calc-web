/*
 * @Author: Akarichan
 * @LastEditors: Akarichan
 */
module.exports = {
    lintOnSave:false,
    outputDir:'docs',
    devServer: {
        port: 60000,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8888/api',
                changeOrigin: true, // 解决跨域
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
    
} 