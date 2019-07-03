/**
 * 公众号文章
 */
import http from './http.js';


export default class ArticleAPI {
    static createArticleCategory(params) {
        return http.httpPost('/article/createArticleCategory',params);
    }
    static getArticleCategory(params) {
        return http.httpPost('/article/getArticleCategory',params);
    }
    static delArticleCategory(params) {
        return http.httpGet('/article/delArticleCategory',params);
    }
}
