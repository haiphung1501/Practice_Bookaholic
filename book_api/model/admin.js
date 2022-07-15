var mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        maxlength: 30
    },
    
    password: {
        type: String,
        maxlength: 30
    },
});

let Admin = mongoose.model("Admin", adminSchema);
module.exports = {Admin};