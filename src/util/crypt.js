const crypto = require('crypto');
const key = 'xuanwo001';
module.exports = {
    algorithm: {
        ecb: 'des-ecb',
        cbc: 'des-cbc'
    },
    //加密
    encrypt: function(data) {
        const cipher = crypto.createCipher('aes192', key);
        var crypted = cipher.update(data, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    },
    //解密
    decrypt: function(encrypted) {
        const decipher = crypto.createDecipher('aes192', key);
        var decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
};