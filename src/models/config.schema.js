const { Schema } = require('mongoose');
//导航
var schema = new Schema({
    //首页标题
    indexTitle: {
        type: String
    },
    //首页描述
    indexDesc: {
        type: String
    },
    //首页关键词
    indexKeywords: {
        type: String
    },
    key:{
        type: String
    }
});

module.exports = schema;
