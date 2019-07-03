module.exports = {
    // 输出文件目录
    outputDir: '../admin',
    devServer: {
        port: 80,
        proxy: 'http://127.0.0.1:80', // 设置代理
    }
}
