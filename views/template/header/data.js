const Base = require('../_base');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
class Header extends Base{
    constructor(){
        super('header');
        this.data = {
            logo:'xxxx',
            nav:[{
                name:'首页',
                href:'/',
                icon:'icon-home'
            },{
                name:'关于',
                href:'/about',
                icon:'icon-user-fill'
            },{
                name:'归档',
                href:'/archives',
                icon:'icon-folderplus-fill'
            }]
        };
    }
    getHtml(href){
        let html = fs.readFileSync(path.resolve( __dirname + `/view.html`)).toString('utf-8');
        let item = _.find(this.data.nav, { href });
        if(item){
            item.cur = true;
        }
        return ejs.render(html, this.data);
    }
}
module.exports = Header;
