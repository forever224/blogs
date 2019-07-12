const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const static = require("koa-static-router");
const app = new Koa();
const oauth = require('./src/app.oauth');
const router = require('./src/controllers').router;
const view = require('./views/controllers').router;

//ejs模板配置
const views = require('koa-views');
app.use(views( './views/page', {map: { html: 'ejs' } } ) );

//文件上传
const koaBody = require('koa-body');
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
    }
}));

app.use(bodyParser()); //参数格式化
app.use(oauth.checkOauth(router.disallow, view.originalUrl)); // 接口登录拦截

//路由
app.use(router.routes()).use(router.allowedMethods());
app.use(view.routes()).use(view.allowedMethods());

//后台静态资源
app.use(static( { dir:"./admin", router:'/admin' } ));
app.use(static( { dir:"./admin/css", router:'/css' } ));
app.use(static( { dir:"./admin/js", router:'/js' } ));
app.use(static( { dir:"./admin/img", router:'/img' } ));
app.use(static( { dir:"./upload", router:'/file' } ));
//前台静态资源
app.use(static( { dir:"./views/css", router:'/views/css' } ));
app.use(static( { dir:"./views/js", router:'/views/js' } ));
app.use(static( { dir:"./views/images", router:'/views/images' } ));
app.use(static( { dir:"./uploads", router:'/uploads' } ));



app.listen('80',() => {
    console.log('starting at ', 'http://localhost:80');
});
