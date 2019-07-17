const BaseCtr = require('./_bas.controller');
const ConfigService = require('../services/config.service'),
    configService = new ConfigService();

class ArticleCtr extends BaseCtr{
    constructor(){
        super('/config');
        this.addRoute('post', this.updateOne, '/updateOne');
        this.addRoute('get', this.getByKey, '/getByKey');

    }
    getByKey(ctx){
        if(!ctx.params.key) throw 'key字段不能为空！';
        return configService.findOne({ key: ctx.params.key })
    }
    updateOne(ctx){
        return configService.update(ctx.data);
    }


}


module.exports = ArticleCtr;
