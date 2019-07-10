import axios from 'axios';
import { MessageBox, Message } from 'element-ui'
import {getToken, setToken, removeToken} from '@/utils/auth'

export default class Http {
    /**
     * 通用发送请求
     * @param params
     * @returns {Promise}
     */
    static httpSend(params) {
        //每次都会去查token是不是存在的,防止刷新数据丢失
        axios.defaults.headers.common['authorization'] = getToken();
        return new Promise((resolve, reject) => {
            axios(params).then(res => {
                var data = res.data;
                if (data.isSuccess) {
                    resolve(data.data);
                } else {
                    reject(data.message || data.error);
                }
            }, error => {
                var status = error.request.status;
                this.validateLogin(status);
                var data = error.request.responseText;
                data = data ? JSON.parse(data) : {message: '未知错误'};
                Message({
                    message: data.message,
                    type: 'error',
                    duration: 5 * 1000
                })
                reject(data.message || data.error);
            });
        });
    }

    /**
     * 错误返回码判断
     * @param status
     */
    static validateLogin(status) {
        switch (status) {
            case 401:
                removeToken();
                // console.log('请登录！',window.location.href.match(/^http.*:\d{2}/));
                window.location.href = window.location.href.match(/^http.*:\d{2,4}/)[0] + '/#/login';
                break;
        }
    }

    static httpGet(url, params) {
        return this.httpSend({
            method: 'get',
            url: url,
            params: params
        });
    }

    static httpPost(url, data) {
        return this.httpSend({
            method: 'post',
            url: url,
            data: data
        });
    }

    static httpPut(url, data) {
        return this.httpSend({
            method: 'put',
            url: url,
            data: data
        });
    }

    static httpDelete(url, params) {
        return this.httpSend({
            method: 'post',
            url: url,
            params: params
        });
    }
}
