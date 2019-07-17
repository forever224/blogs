/**
 * 配置
 */
import http from './_http';


export default class API {
    static getByKey(params) {
        return http.httpGet('/config/getByKey',params);
    }
    static updateOne(params) {
        return http.httpPost('/config/updateOne',params);
    }
}
