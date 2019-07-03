const path = require('path');
const log4js = require('log4js');
log4js.configure({
    appenders: {
        file: { type: 'dateFile', filename: path.resolve(__dirname, './logs/log.log'), pattern: "yyyy-MM-dd" },
        console:{ type:'console' }
    },
    categories: {
        default: { appenders: [ 'file' ], level: 'info' },
        console: { appenders: [ 'console' ], level: 'info' }
    }
});
module.exports = log4js.getLogger('error');

