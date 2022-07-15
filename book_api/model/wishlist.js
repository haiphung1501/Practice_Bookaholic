const mongoose = require('mongoose');

const wishList = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }, 
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        },
    ],
});

let WishList = mongoose.model("WistList", wishListSchema);
module.exports = {WishList};