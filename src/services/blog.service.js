let schema = require('../models/blog.schema');
let BasService = require('./_bas.service');

class Service extends BasService {
    constructor() {
        super('tag', schema);
    }
}

module.exports = Service;
