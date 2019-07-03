let schema = require('../../models/admin/admin.logs.schema');
let BasService = require('../_bas.service');
let crypt = require('../../util/crypt');
class AdminLogsService extends BasService {
    constructor() {
        super('adminLog', schema);
    }

    /**
     * 生成Authorization
     * @param {Object} user 用户信息
     */
    async created(phone) {
        if (!phone) {
            throw '电话号码不能为空！';
        }
        let time = new Date().getTime();
        let oauth = crypt.encrypt(time + '');
        return this.update({ phone, oauth });
    }
}

module.exports = AdminLogsService;
