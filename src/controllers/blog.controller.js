const BaseCtr = require('./_bas.controller');
const Service = require('../services/blog.service'),
    service = new Service();

class Ctr extends BaseCtr{
    constructor(){
        super('/blog');
        this.addRoute('get', this.getList, '/list');
        this.addRoute('get', this.getItem, '/item');
        this.addRoute('get', this.getTags, '/tags');
        this.addRoute('get', this.getGroup, '/group');
        this.addRoute('post', this.add, '/add');
        this.addRoute('post', this.delete, '/delete');
    }
    async getList({ pageSize, pageNum }){
        let list = await service.find({}, '', pageSize, pageNum);
        let total = await service.count();
        return { list, total };
    }
    getItem(ctx){
        return service.findOne(ctx.params);
    }
    add(ctx){
        return service.update(ctx.data);
    }
    delete(ctx){
        return service.remove(ctx.data);
    }
    getTags(){
        return service.getTags();
    }
    getGroup(){
        return service.getGroup();
    }
}


module.exports = Ctr;
