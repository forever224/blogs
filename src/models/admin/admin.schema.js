const { Schema } = require('mongoose');
//管理员
var adminSchema = new Schema({
    //手机
    phone: {
        type: String,
        required: true
    },
    //密码
    password: {
        type: String,
        required: true
    },
    //姓名
    name: {
        type: String
    },
    //用户头像
    icon: {
        type: String
    },
    //邮箱
    email: {
        type: String
    }
});

module.exports = adminSchema;