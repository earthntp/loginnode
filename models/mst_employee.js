var mongoose = require('mongoose');
// Schema Validation
var userSchema = mongoose.Schema({
    "employee_id" : Number, 
    "name" : String, 
    "doctype" : String, 
    "user" : String, 
    "password" : String, 
    "salary" : Number, 
},{
    collection: 'mst_employee'
});

var User = mongoose.model('mst_employee', userSchema);
module.exports = User;