const moment = require('moment');
let AdminLogsService = require('./services/admin/admin.logs.service'),
    adminLogsService = new AdminLogsService();



/**
 * 所有请求的【数据接口】都需要经过校验，allow数组中出现的可以不用
 * @param disallow {Array} 数据接口，查看controllers/index.js
 * @returns {function(*, *)}
 */
let checkOauth = (disallow, originalUrl) => {
    //不需要验证的接口,结尾匹配
    let allow =['/admin/index.html', '/admin/login', '/admin/create', '/upload/img'];
    return async (ctx, next) => {
        let disallowFlg = new RegExp(disallow.join('&|') + '$|' + disallow.join('/|') + '/').test(ctx.originalUrl);
        let allowFlg = new RegExp(allow.join('$|') + '$').test(ctx.originalUrl);
        if(disallowFlg && !allowFlg){
            //请求其他接口
            if(ctx.req.headers.authorization){
                let oauth = ctx.req.headers.authorization;
                let time = moment().subtract(2, 'hour').toDate();
                let log = await adminLogsService.findOne({ oauth, created: { $gt: time } });
                if(!log){
                    ctx.status = 401;
                    ctx.response.body = { isSuccess: false, error: '请登录！', reLogin: true };
                }else{
                    log.created = new Date();
                    adminLogsService.update(log);
                    await next();
                }
            }else{
                ctx.status = 401;
                ctx.response.body = { isSuccess: false, error: '请登录！', reLogin: true };
            }
        }else{
            //放行
            await next();
        }
    }
}



module.exports = {
    checkOauth
};
