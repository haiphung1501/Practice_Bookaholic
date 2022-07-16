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
    wishlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        },
    ],
});

let User = mongoose.model("User", userSchema);
module.exports = {User};