const BaseCtr = require('./_bas.controller');
const ArticleCategoryService = require('../services/article/article.category.service'),
    articleCategoryService = new ArticleCategoryService();

class ArticleCtr extends BaseCtr{
    constructor(){
        super('/article');
        this.addRoute('post', this.createArticleCategory, '/createArticleCategory');
        this.addRoute('post', this.getArticleCategory, '/getArticleCategory');
        this.addRoute('get', this.delArticleCategory, '/delArticleCategory');

    }

    /**
     * 创建分类
     * @param ctx
     * @returns {Promise}
     */
    createArticleCategory(ctx){
        return articleCategoryService.save(ctx.data);
    }
    getArticleCategory(ctx){
        return articleCategoryService.find(ctx.data);
    }
    delArticleCategory(ctx){
        return articleCategoryService.remove(ctx.params);
    }


}


module.exports = ArticleCtr;
