import axios from 'axios';
axios.defaults.baseURL = window.location.origin;
export default class zfmHttp {
    /**
     * 通用发送请求
     * @param params
     * @param isRaw 是否取原始数据
     * @returns {Promise}
     */
    static httpSend(params, isRaw) {
        //每次都会去查token是不是存在的,防止刷新数据丢失
        axios.defaults.headers.common['Authorization'] =
            axios.defaults.headers.common['Authorization'] || window.sessionStorage.Authorization;

        return new Promise((resolve, reject) => {
            axios(params).then(res => {
                var data = res.data;
                if (isRaw) {
                    resolve(data);
                } else {
                    if (data.isSuccess) {
                        resolve(data.data);
                    } else {
                        reject(data.message || data.error);
                    }
                }
            }, error => {
                var status = error.request.status;
                this.validateLogin(status);
                var data = error.request.responseText;
                data = data ? JSON.parse(data) : {message:'未知错误'};
                reject(data.message || data.error);
            });
        });
    }

    static validateLogin(status) {
        switch (status) {
            case 401:
                window.location.href = axios.defaults.baseURL + '/#/login';
                break;
        }
    }

    static httpGet(url, params, isRaw) {
        return this.httpSend({
            method: 'get',
            url: url,
            params: params
        }, isRaw);
    }

    static httpPost(url, data, isRaw) {
        return this.httpSend({
            method: 'post',
            url: url,
            data: data
        }, isRaw);
    }

    static httpPut(url, data, isRaw) {
        return this.httpSend({
            method: 'put',
            url: url,
            data: data
        }, isRaw);
    }

    static httpDelete(url, params, isRaw) {
        return this.httpSend({
            method: 'POST',
            url: url,
            params: params
        }, isRaw);
    }
    static httpDownload(url, params) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                params: params
            }).then(res => {
                if (res.headers && (res.headers['content-type'] === 'application/vnd.ms-execl')) {
                    let iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.src = res.request.responseURL;
                    iframe.onload = function () {
                        document.body.removeChild(iframe)
                    }
                    document.body.appendChild(iframe);
                    return
                }
            }, error => {
            });
        })

    }
}
