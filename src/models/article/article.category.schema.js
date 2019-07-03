const { Schema } = require('mongoose');
//文章分类
var articleCategorySchema = new Schema({
    //分类名称
    title: {
        type: String,
        required: true
    },
    //分类短标题
    shortTitle: {
        type: String
    },
    //分类描述
    disc: {
        type: String
    },
    //上级分类
    pId: {
        type: String,
        defaule:'0'
    },
    //缩列图
    thumb: {
        type: String
    },
    //seo标题
    seoTitle: {
        type: String
    },
    //seo描述
    seoDisc: {
        type: String
    },
    //seo关键词
    seoKeyword: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = articleCategorySchema;
