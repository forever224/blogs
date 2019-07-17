let schema = require('../models/config.schema');
let BasService = require('./_bas.service');

class Service extends BasService {
    constructor() {
        super('config', schema);
    }
}

module.exports = Service;
