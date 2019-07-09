/**
 * 公众号文章
 */
import http from './_http';


export default class API {
    static getList(params) {
        return http.httpGet('/nav/list',params);
    }
    static addNav(params) {
        return http.httpPost('/nav/add',params);
    }
    static deleteNav(params) {
        return http.httpPost('/nav/delete',params);
    }
}
