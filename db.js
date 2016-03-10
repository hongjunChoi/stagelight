var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stagelight');
module.exports = mongoose.connection;