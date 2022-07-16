const mongoose = require('mongoose');
var bookId =  mongoose.Schema.Types.ObjectId;

const wishList = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }, 
    books: [
        {
            type: bookId,
            ref: "Book"
        },
    ],
});

let WishList = mongoose.model("WistList", wishListSchema);
module.exports = {WishList};