const mongoose = require('mongoose'),
	config = require('../app.config'),
    db = mongoose.connection,
	DB_URL = 'mongodb://' + config.getDBPath(),
	options = {
		user: config.get('DB_USER'),
		pass: config.get('DB_PASS'),
        poolSize: 10,
        useNewUrlParser: true
	};

/**
 * 连接
 */
mongoose.connect(DB_URL, options);

/**
 * 连接成功
 */
db.once('open', function () {
	console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
db.on('error',function (err) {
	console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
db.on('disconnected', function () {
	console.log('Mongoose connection disconnected');
});

module.exports = mongoose;
