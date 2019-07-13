const BaseCtr = require('./_bas');
const BlogService = require('../../src/services/blog.service');
const blogService = new BlogService();
const _ = require('lodash');

class Controller extends BaseCtr {
    constructor() {
        super();
        this.addRoute('/info', this.getData, 'info');
    }

    async getData(ctx) {
        let _id = ctx.params.id;
        if (!_id) throw 'id不能为空！';
        let blog = await blogService.findOne({_id});
        let all = await blogService.find({}, '_id, title');
        //获取的数组，里面都是mongoose.document对象，需要转成普通文档格式才能使用
        let result = [];
        all.forEach(item => {
            item = item.toObject();
            item._id = item._id.toString();
            result.push(item);
        })
        let index = _.findIndex(result, {_id});
        let prev = {
            href: index == 0 ? undefined : '/info?id=' + all[index - 1]._id,
            title: index == 0 ? undefined : all[index - 1].title
        };
        let next = {
            href: index == all.length - 1 ? undefined : '/info?id=' + all[index + 1]._id,
            title: index == all.length - 1 ? undefined : all[index + 1].title
        };
        return { blog, prev, next, title:blog.title , desc: blog.desc, keywords: blog.keywords}
    }
}


module.exports = Controller;
