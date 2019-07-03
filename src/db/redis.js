/**
 * redis操作
 */
const Redis = require('ioredis'),
    Config = require('../app.config'),
    sentinels = Config.get('RDS_SENTINEL'),
    database = Config.get('RDS_DATABASE');
const redis = new Redis({
    sentinels,
    name: 'master1',
    db: database
});

redis.on('ready', function() {
    console.log('connect redis success：', JSON.stringify(sentinels));
});

redis.on('end', function() {
    console.log('redis exit：');
});

redis.on('error', function() {
    console.error('connect redis fail：');
});

module.exports = redis;
