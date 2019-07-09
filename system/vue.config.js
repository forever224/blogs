
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 输出文件目录
    outputDir: './dist',
    devServer: {
        port: 8080,
        proxy: 'http://127.0.0.1:8080', // 设置代理
    },
    chainWebpack(config) {
        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}
