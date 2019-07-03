/**
 * 所有服务连接地址配置
 */

const config = require('./db/config.json');

class Config {
    static get(key) {
        return key ? config[key] : config;
    }

    static getDBPath() {
        return this.get('DB_HOST') + ':' + this.get('DB_POST') + '/' + this.get('DB_DATABASE');
    }

    static getRedisPath() {
        return this.get('RDS_HOST') + ':' + this.get('RDS_POST');
    }

    static getCheckerPath() {
        return this.get('CHECKER_HOST') + ':' + this.get('CHECKER_POST');
    }

    static getSendChecker(router) {
        router = router || '';
        return 'http://' + this.get('CHECKER_HOST') + ':' + this.get('CHECKER_POST') + '/checker/' + router;
    }

    static getLocalChecker(router) {
        router = router || '';
        return 'http://localhost:' + this.get('CHECKER_POST') + '/checker/' + router;
    }

    static getSendDispatch(router) {
        router = router || '';
        return 'http://' + this.get('CHECKER_HOST') + ':' + this.get('CHECKER_POST') + '/dispatch/' + router;
    }

    static getLocalDispatch(router) {
        router = router || '';
        return 'http://localhost:' + this.get('CHECKER_POST') + '/dispatch/' + router;
    }

    static getSendClient(router = '', namespace = 'check') {
        return 'http://' + this.get('CLIENT_HOST') + ':' + this.get('CLIENT_POST') + '/' + namespace + '/' + router;
    }

    static getConcurrency() {
        return this.get('CONCURRENCY');
    }

    static getQueue() {
        return this.get('QUEUE');
    }
}

module.exports = Config;