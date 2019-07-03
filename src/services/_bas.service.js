const mongoose = require('../db/db');

mongoose.Promise = global.Promise;

class basService {
    constructor(name, schema) {
        this.dbModel = mongoose.model(name, schema);
    }

    /**
     * 把String类型id转换为ObjectId
     * 使用聚合查询时id必须ObjectId类型
     * @param {String|Object} id - 需要转换的id
     * @return {Object}
     */
    toObjectId(id = '') {
        return typeof id === 'string' ? mongoose.Types.ObjectId(id) : id;
    }

    /**
     * 查找单条数据
     * @param {Object} filter - 查询条件
     * @param {String|Object} [keys] - 字段
     * @return {Promise<*>}
     */
    async findOne(filter, keys) {
        let filterKey = keys ? [filter, keys] : [filter];
        return this.dbModel.findOne(...filterKey).exec();
    }

    /**
     * 查找数据列表
     * 原生的数据查找，可以处理分页
     * @param {Object} filter - 查询条件
     * @param {String|Object} [keys] - 字段
     * @param {Number} [pageSize] - 每页数量
     * @param {Number} [pageNum] - 页码
     * @param {Object} [sort] - 排序规则
     * @return {Promise}
     */
    find(filter, keys, pageSize, pageNum = 0, sort) {
        let filterKey = [filter];
        // 筛选字段
        if (keys) {
            filterKey.push(keys);
        }
        let query = this.dbModel.find(...filterKey);
        // 分页
        if (pageSize) {
            query.skip(pageSize * (pageNum - 1));
            query.limit(pageSize);
        }
        // 排序
        if (sort) {
            query.sort(sort);
        }
        return query.exec();
    }

    /**
     * 新增数据
     * @param {Object} item - 数据内容
     * @return {Promise}
     */
    save(item) {
        let entity = item.save ? item : new this.dbModel(item);
        return entity.save();
    }

    /**
     * 更新数据
     * 没有_id时会自动新增数据
     * @param {Object} item - 数据内容
     * @return {Promise}
     */
    update(item) {
        let _id = item._id; // 需要取出主键_id
        if (_id) {
            delete item._id; // 再将其删除
            // 查找并更新，找得到就更新，找不到就新增。
            return this.dbModel.findByIdAndUpdate(_id, item).exec();
        } else {
            return this.save(item);
        }
    }

    /**
     * 批量插入数据
     * @param {Array} arrayData
     * @return {Promise<any>}
     */
    create(arrayData) {
        return new Promise((resolve, reject) => {
            this.dbModel.create(arrayData, (err, jellybean, snickers) => {
                if (err) {
                    logger.error(err);
                    reject(err);
                    return;
                }
                resolve(jellybean);
            })
        });
    }

    /**
     * 获取符合条件的结果的条数
     * @param {Object} [filter] - 查询条件
     * @return {Promise}
     */
    count(filter) {
        return this.dbModel.count(filter).exec();
    }

    /**
     * 删除数据
     * @param {Object} filter - 删除条件
     * @return {Promise}
     */
    remove(filter) {
        return this.dbModel.remove(filter).exec();
    }
}

module.exports = basService;
