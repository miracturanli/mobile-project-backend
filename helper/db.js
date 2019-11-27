const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect('mongodb://mirac:turan.123M!@ds349618.mlab.com:49618/heroku_dbz5kd5s');
    mongoose.connection.on('open', () => {
        console.log('bağlandı');
    });
    mongoose.connection.on('error', (err) => {
        console.log('bağlanamadı');
    });
    mongoose.Promise = global.Promise;
};