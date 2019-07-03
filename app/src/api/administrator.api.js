/**
 * 管理员
 */
import http from './http.js';


export default class AdministratorAPI {
    static login(params) {
        return http.httpPost('/admin/login', params);
    }
    static register(params) {
        return http.httpPost('/admin/register', params);
    }
}