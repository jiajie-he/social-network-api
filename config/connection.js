const mongoose = require('mongoose');

const mongoConnectString= process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialnetwork'

mongoose.connect(mongoConnectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
