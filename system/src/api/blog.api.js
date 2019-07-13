/**
 * 公众号文章
 */
import http from './_http';


export default class API {
    static getList(params) {
        return http.httpGet('/blog/list',params);
    }
    static getItem(params) {
        return http.httpGet('/blog/item',params);
    }
    static addBlog(params) {
        return http.httpPost('/blog/add',params);
    }
    static deleteBlog(params) {
        return http.httpPost('/blog/delete',params);
    }
    static getTags(params) {
        return http.httpGet('/blog/tags',params);
    }
}
