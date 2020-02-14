var mongoose    =   require("mongoose");
mongoose.connect('mongodb://mongo:27017/demoDb');
var mongoSchema =   mongoose.Schema;
var userSchema  = {
    "userEmail" : String,
    "userPassword" : String
};
module.exports = mongoose.model('userLogin',userSchema);;
