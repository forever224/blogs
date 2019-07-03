const BaseCtr = require('./_bas.controller');
const UploadService = require('../services/upload.service'),
    uploadService = new UploadService();
const path = require('path');

class AdminCtr extends BaseCtr{
    constructor(){
        super('/upload');
        this.addRoute('post', this.uploadImg, '/img');
    }

    /**
     * 上传单张图片
     * @param type {String} 请求头里插入type参数，区分文件用途
     * @returns {string}
     */
    uploadImg(ctx){
        let type = ctx.req.headers.type || 'info';
        let filePath = path.join(__dirname, '../../upload');
        let name = new Date().getTime() + `_${type}_` + Math.floor(Math.random()*10000);
        return uploadService.uploadFile(ctx, filePath, name);
    }
}


module.exports = AdminCtr;
