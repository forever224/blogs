let schema = require('../models/nav.schema');
let BasService = require('./_bas.service');

class NavService extends BasService {
    constructor() {
        super('nav', schema);
    }
}

module.exports = NavService;
