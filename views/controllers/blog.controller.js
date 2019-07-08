const BaseCtr = require('./_bas');

class Controller extends BaseCtr{
    constructor(){
        super();
        this.addRoute('/blog', this.getData, 'blog');
    }
    getData(ctx){

        return {

        }
    }
}


module.exports = Controller;
