var mongoose = require("mongoose");
var mongoUrl = 'mongodb://mongo:27017/demoDb'

// https://gist.github.com/asalant/4092454
var connectWithRetry = function() {
  return mongoose.connect(mongoUrl, function(err) {
    if (err) {
      console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
      setTimeout(connectWithRetry, 5000);
    }
  });
};
connectWithRetry();

var mongoSchema =   mongoose.Schema;
var userSchema  = {
    "userEmail" : String,
    "userPassword" : String
};
module.exports = mongoose.model('userLogin',userSchema);;
