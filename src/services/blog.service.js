let schema = require('../models/blog.schema');
let BasService = require('./_bas.service');
const format = require('../util/format')
const _ = require('lodash');

class Service extends BasService {
    constructor() {
        super('blog', schema);
    }
    async getTags(){
        let res = await this.find({},'key');
        let arr = [];
        _.forEach(res, item => {
            arr.push(...item.key);
        });
        return [ ...new Set(arr) ];
    }
    // 重写基类，格式化时间
    async findOne(filter, keys) {
        let filterKey = keys ? [filter, keys] : [filter];
        let one = await this.dbModel.findOne(...filterKey).exec();
        one = one.toObject();
        one.updated = format.formatDate('yyyy-MM-dd', one.updated);
        one.created = format.formatDate('yyyy-MM-dd', one.created);
        return one;
    }
    getGroup(){
        return this.dbModel.aggregate([
            { $project:{ title:1, _id:1, time:{ $dateToString:{ date:'$created',format:"%Y-%m-%d" } }, year:{ $dateToString:{ date:'$created',format:"%Y" } }} },
            { $group:{ _id:'$year', list:{ $push:{ title:'$title',_id:'$_id',time:'$time' } } } }
        ])
    }
}

module.exports = Service;
