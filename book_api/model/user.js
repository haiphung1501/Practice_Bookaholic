var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        maxlength: 30
    },
    
    password: {
        type: String,
        maxlength: 30,
        minlength: 6
    },
});

let User = mongoose.model("User", userSchema);
module.exports = {User};