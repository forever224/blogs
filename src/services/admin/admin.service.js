let schema = require('../../models/admin/admin.schema');
let BasService = require('../_bas.service');
let crypt = require('../../util/crypt');
let AdminLogsService = require('./admin.logs.service');
class AdminService extends BasService {
    constructor() {
        super('admin', schema);
        this.adminLogsService = new AdminLogsService();
    }

    /**
     * 通过用户名和用户密码登录
     * @param {Object} user 用户信息
     */
    async login(user) {
        let userData = await this.findOne({
            phone: user.phone
        });
        if (!userData) {
            throw '用户名或密码不正确！';
        }
        if (user.password !== crypt.decrypt(userData.password)) {
            throw '用户名或密码不正确！';
        }
        return this.adminLogsService.created(user.phone);
    }

    /**
     * 创建管理员
     * @param { Object } user
     */
    createNew(user){
        if(!user.phone) throw '电话不能为空';
        if(!user.password) throw '密码不能为空';
        user.password = crypt.encrypt(user.password);
        return this.update(user);
    }
}

module.exports = AdminService;
