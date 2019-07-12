const { Schema } = require('mongoose');
//博文详情
var navSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc:{
        type: String,
    },
    keywords:{
        type: String,
    },
    // 引导图
    intro:{
        type: String,
    },
    key:{
        type: Array
    },
    // md编辑器，渲染成html的内容
    render:{
        type: String,
    },
    // md 原始编辑器内容
    value:{
        type: String,
    },
    created:{
        type: Date,
        default: Date.now()
    },
    updated:{
        type: Date,
        default: Date.now()
    },
    //作者
    author:{
        type: String,
        default: 'zfm'
    }

});

module.exports = navSchema;
