const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
class Base {
    constructor(name){
        this.name = name;
        this.data = {};
    }
    getHtml(){
        let html = fs.readFileSync(path.resolve( __dirname + `/${this.name}/view.html`)).toString('utf-8');
        return ejs.render(html, this.data);
    }

}
module.exports = Base;
