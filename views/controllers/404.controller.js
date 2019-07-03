const BaseCtr = require('./_bas');

class ErrorCtr extends BaseCtr{
    constructor(){
        super();
        this.addRoute('/404', this.getData, '404');
    }
    getData(ctx){
        console.log('error/404');
        return {}
    }
}


module.exports = ErrorCtr;
