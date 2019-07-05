const BaseCtr = require('./_bas');

class Controller extends BaseCtr{
    constructor(){
        super();
        this.addRoute('/archives', this.getData, 'archives');
    }
    getData(ctx){
        let title = '你好ejs';
        let list = ['哈哈','嘻嘻','看看','问问'];
        let content = "<h2>这是一个h2</h2>";
        let num = 10;
        let id = ctx.params.id;
        return {
            title,list,content,num,id
        }
    }
}


module.exports = Controller;
