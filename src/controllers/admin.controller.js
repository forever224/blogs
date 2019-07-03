const BaseCtr = require('./_bas.controller');
const AdminService = require('../services/admin/admin.service'),
    adminService = new AdminService();

class AdminCtr extends BaseCtr{
    constructor(){
        super('/admin');
        this.addRoute('post', this.login, '/login');
        this.addRoute('post', this.saveItem, '/create');
    }
    login(ctx){
        return adminService.login(ctx.data);
    }
    saveItem(ctx){
        console.log(ctx.data);
        return adminService.createNew(ctx.data);
    }
}


module.exports = AdminCtr;
