let schema = require('../../models/article/article.category.schema');
let BasService = require('../_bas.service');

class ArticleCategoryService extends BasService {
    constructor() {
        super('articleCategory', schema);
    }
    getArticleCategory(params){
        let pageSize = +params.pageSize || 0;
        let pageNum = +params.pageNum || 10;
        delete params.pageSize;
        delete params.pageNum;
        return this.find( params, '', pageSize, pageNum );
    }
}

module.exports = ArticleCategoryService;
