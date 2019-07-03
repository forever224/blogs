const Router = require('koa-router');
const fs = require('fs');
const path = require('path');


class AppCtr{
    constructor(){
        this.router = new Router();
        this.routerBuild();
    }
    async routerBuild(){
        let list = await this.getControllers();
        for(let i = 0; i < list.length; i++){
            let ctr = require(path.resolve(__dirname + '/' + list[i]));
            ctr = new ctr();
            this.router.use(ctr.router.routes()).use(ctr.router.allowedMethods());
        }
    }
    getControllers(){
        let result = [];
        return new Promise( (resolve, reject) => {
            fs.readdir(__dirname, function (err, files) {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                files.forEach(function (filename) {
                    if(filename.indexOf('.controller.js') !== -1){
                        result.push(filename);
                    }
                });
                resolve(result);
            });
        })
    }
}

module.exports = new AppCtr();
