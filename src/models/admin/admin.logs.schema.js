const { Schema } = require('mongoose');
//管理员
var adminSchema = new Schema({
    //手机
    phone: {
        type: String,
        required: true
    },
    oauth:{
        type: String,
        required: true
    },
    //创建时间
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = adminSchema;