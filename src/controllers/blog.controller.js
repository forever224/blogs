const BaseCtr = require('./_bas.controller');
const Service = require('../services/blog.service'),
    service = new Service();

class Ctr extends BaseCtr{
    constructor(){
        super('/nav');
        this.addRoute('get', this.getList, '/list');
        this.addRoute('post', this.addNav, '/add');
        this.addRoute('post', this.deleteNav, '/delete');
    }
    getList(){
        return service.find();
    }
    addNav(ctx){
        return service.update(ctx.data);
    }
    deleteNav(ctx){
        return service.remove(ctx.data);
    }
}


module.exports = Ctr;
