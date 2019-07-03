const path = require("path");
const fs = require('fs');
class UploadService{
    /**
     * 上传单个文件
     * @param ctx
     * @returns {string}
     */
    uploadFile(ctx, filePath, name) {
        // 获取上传文件
        let file = ctx.request.files.file;
        let type = path.extname(file.name); //获取后缀
        if(name){
            name = name + type;
        }else{
            name = file.name;
        }
        // 创建可读流
        const reader = fs.createReadStream(file.path);
        let savePath = filePath + `/${name}`;
        // 创建可写流
        const upStream = fs.createWriteStream(savePath);
        // 可读流通过管道写入可写流
        reader.pipe(upStream);
        return name;
    }


    /**
     * 上传多个文件
     * @param ctx
     * @returns {string}
     */
    uploadFiles(ctx){
        // 获取上传文件
        const files = ctx.request.files.file;
        for (let file of files) {
            // 创建可读流
            const reader = fs.createReadStream(file.path);
            // 获取上传文件扩展名
            let filePath = path.join(__dirname, '../artwork') + `/${file.name}`;
            // 创建可写流
            const upStream = fs.createWriteStream(filePath);
            // 可读流通过管道写入可写流
            reader.pipe(upStream);
        }
        return  "上传成功！";
    }

}
module.exports = UploadService;
