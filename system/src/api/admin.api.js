/**
 * 公众号文章
 */
import http from './_http';


export default class API {
    static login(params) {
        return http.httpPost('/admin/login', params);
    }
    static register(params) {
        return http.httpPost('/admin/register', params);
    }
}
