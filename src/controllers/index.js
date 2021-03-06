const Router = require('koa-router');
let AdminCtr = require('./admin.controller'),
    adminCtr = new AdminCtr();
let UploadCtr = require('./upload.controller'),
    uploadCtr = new UploadCtr();
let ArticleCtr = require('./article.controller'),
    articleCtr = new ArticleCtr();
let NavCtr = require('./nav.controller'),
    navCtr = new NavCtr();
let BlogCtr = require('./blog.controller'),
    blogCtr = new BlogCtr();
let ConfigCtr = require('./config.controller'),
    configCtr = new ConfigCtr();


class IndexCtr{
    constructor(){
        this.router = new Router();
        this.router.disallow = [];
        this.routerBuild('/admin', adminCtr.router);
        this.routerBuild('/upload', uploadCtr.router);
        this.routerBuild('/article', articleCtr.router);
        this.routerBuild('/nav', navCtr.router);
        this.routerBuild('/blog', blogCtr.router);
        this.routerBuild('/config', configCtr.router);
    }
    routerBuild(namespace, ctr){
        this.router.disallow.push(namespace);
        this.router.use(namespace, ctr.routes(), ctr.allowedMethods());
    }
}


module.exports = new IndexCtr();
