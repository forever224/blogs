const BaseCtr = require('./_bas');
const BlogService = require('../../src/services/blog.service');
const blogService = new BlogService();

class Controller extends BaseCtr{
    constructor(){
        super();
        this.addRoute('/archives', this.getData, 'archives');
    }
    async getData(){
        let group = await blogService.getGroup();
        return {group};
    }
}


module.exports = Controller;
