const { Schema } = require('mongoose');
//导航
var navSchema = new Schema({
    //导航名称
    name: {
        type: String,
        required: true
    },
    //导航链接
    href: {
        type: String,
        required: true
    },
    //导航icon
    icon: {
        type: String
    },
    //导航排序数
    sort: {
        type: Number,
        default: 50
    }
});

module.exports = navSchema;
