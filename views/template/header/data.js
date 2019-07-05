const Base = require('../_base');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const NavService = require('../../../src/services/client/nav.service');
class Header extends Base{
    constructor(){
        super('header');
        this.data = {};
    }
    async init(){
        let navService = new NavService();
        let nav = await navService.find({},'',undefined,undefined,{ sort: -1 });
        this.data.nav = nav;
    }
    async getHtml(href){
        await this.init();
        let html = fs.readFileSync(path.resolve( __dirname + `/view.html`)).toString('utf-8');
        let item = _.find(this.data.nav, { href });
        if(item){
            item.cur = true;
        }
        return ejs.render(html, this.data);
    }
}
module.exports = Header;
