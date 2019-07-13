const BaseCtr = require('./_bas');
const BlogService = require('../../src/services/blog.service');
const blogService = new BlogService();
const _ = require('lodash');
class Controller extends BaseCtr {
    constructor() {
        super();
        this.addRoute('/', this.getData, 'index');
    }

    async getData(ctx) {
        let pageSize = ctx.params.pageSize * 1 || 10;
        let pageNum = ctx.params.pageNum * 1 || 1;
        let key = ctx.params.key || '';
        let params = key ? { key:{ $in: key } }: {};
        let blogs = await blogService.find(params, '', pageSize, pageNum);
        let list = [];
        blogs.forEach(item => {
            item = item.toObject();
            item.created = this.formatDate('yyyy-MM-dd', new Date(item.created));
            list.push(item);
        })
        let total = await blogService.count(params);
        let num = Math.ceil(total / pageSize);
        let str = key ? '?key=' + key + '&pageNum=' : '?pageNum=';
        return {list, num, pageNum, str};
    }
    test(){
        console.log('test');
    }
    formatDate(fmt, date) {
        var o = {
            "M+": date.getMonth() + 1,                 //月份
            "d+": date.getDate(),                    //日
            "h+": date.getHours(),                   //小时
            "m+": date.getMinutes(),                 //分
            "s+": date.getSeconds(),                 //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
}


module.exports = Controller;
