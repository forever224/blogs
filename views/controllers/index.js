const Router = require('koa-router');
const fs = require('fs');
const path = require('path');


class AppCtr{
    constructor(){
        this.router = new Router();
        this.router.originalUrl = [];
        this.routerBuild();
    }
    routerBuild(){
        let list = this.getControllers();
        for(let i = 0; i < list.length; i++){
            let ctr = require(path.resolve(__dirname + '/' + list[i]));
            ctr = new ctr();
            this.router.originalUrl = this.router.originalUrl.concat(ctr.originalUrl);
            this.router.use(ctr.router.routes()).use(ctr.router.allowedMethods());
        }
    }
    getControllers(){
        let result = [];
        let files = fs.readdirSync(__dirname);
        files.forEach(function (filename) {
            if(filename.indexOf('.controller.js') !== -1){
                result.push(filename);
            }
        });
        return result;
    }
}

module.exports = new AppCtr();
