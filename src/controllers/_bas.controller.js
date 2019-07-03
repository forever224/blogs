const Router = require('koa-router');
const logger = require('../../log');
class BasController {
    constructor(name) {
        this.router = new Router();
        this.name = name;
        this.addRoute('get', this.getItem);
        this.addRoute('post', this.saveItem);
        this.addRoute('delete', this.removeItem);
    }
    addRoute(method, handler, uri = '/') {
        this.router[method](uri, this.httpWrapper(handler));
    }
    //获取url请求客户端ip
    getClientIP(ctx) {
        let ip = ctx.ip || '';
        if (ip === '::1') {
            ip = '127.0.0.1';
        }
        return ip.replace('::ffff:', '');
    };
    static logError(...args) {
        logger.error(args);
    }
    static logInfo(...args) {
        logger.info(args);
    }
    httpWrapper(handler) {
        handler.bind(this);
        return async (ctx) => {
            try {
                ctx.params = ctx.query;
                ctx.data = ctx.request.body;
                let result = handler(ctx);
                let data = null;
                //如果执行的结果是Promise，我们将有通过await来优化执行的流程。
                if (result instanceof Promise) {
                    data = await result;
                } else {
                    data = result;
                }
                // 默认200成功状态
                ctx.status = 200;
                ctx.type = 'application/json; charset=utf-8';
                //返回执行结果
                ctx.body = { isSuccess: true, data};
            } catch (err) {
                let errorMessage = err.message || err;
                BasController.logError('====' + ctx.originalUrl + '====  ' + errorMessage);
                console.log(errorMessage);
                //失败默认将会返回201,将把结果扔到给前端
                ctx.status = 201;
                ctx.body = { isSuccess: false, error: errorMessage };
            }
        };
    }
    getItem(ctx) {
        ctx.status = 501;
        BasController.logError('get: /%s 没有实现！', ctx.originalUrl);
        throw 'NOT IMPLEMENT ==> ' + ctx.originalUrl;
    }

    saveItem(ctx) {
        ctx.status = 501;
        BasController.logError('post: /%s 没有实现！', ctx.originalUrl);
        throw 'NOT IMPLEMENT ==> ' + ctx.originalUrl;
    }

    removeItem(ctx) {
        ctx.status = 501;
        BasController.logError('delete: /%s 没有实现！', ctx.originalUrl);
        throw 'NOT IMPLEMENT ==> ' + ctx.originalUrl;
    }
}

module.exports = BasController;
