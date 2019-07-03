const Router = require('koa-router');
const publicData = require('./public');
class BasController {
    constructor() {
        this.router = new Router();
    }
    addRoute(uri = '/', handler, htmlName) {
        this.router.get(uri, this.httpWrapper(htmlName, handler));
    }
    httpWrapper(htmlName, handler) {
        handler.bind(this);
        return async (ctx) => {
            try{
                let result = handler(ctx);
                let data = null;
                //如果执行的结果是Promise，我们将有通过await来优化执行的流程。
                if (result instanceof Promise) {
                    data = await result;
                } else {
                    data = result;
                }
                await ctx.render(htmlName, { ...publicData, data });
            }catch (e) {
                console.log('goto 404');
                ctx.response.redirect('/404');
            }
        }
    }
}

module.exports = BasController;
