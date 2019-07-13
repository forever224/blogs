const Router = require('koa-router');
const _ = require('lodash');
const Header = require('../template/header/data');
const Footer = require('../template/footer/data');
class BasController {
    constructor() {
        this.originalUrl = [];
        this.router = new Router();
    }
    addRoute(uri = '/', handler, htmlName) {
        this.originalUrl.push(uri);
        this.router.get(uri, this.httpWrapper(htmlName, handler));
    }
    httpWrapper(htmlName, handler) {
        return async (ctx) => {
            try{
                ctx.params = ctx.query;
                ctx.data = ctx.request.body;
                let result = handler.call(this, ctx);
                let data = null;
                if (result instanceof Promise) {
                    data = await result;
                } else {
                    data = result;
                }
                data.header = await new Header().getHtml(ctx.originalUrl);
                data.footer = await new Footer().getHtml();
                data.title = data.title? data.title : '默认标题';
                data.desc = data.desc? data.desc : '默认描述';
                data.keywords = data.keywords? data.keywords : '默认关键词';
                await ctx.render(htmlName, data);
            }catch (e) {
                throw e;
                console.log('goto 404');
                ctx.response.redirect('/404');
            }
        }
    }
}

module.exports = BasController;
