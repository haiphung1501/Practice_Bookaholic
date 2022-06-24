var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var wishList = new Schema({
    title: {type: String, default: "Cool Wish List"},
    books: [{type: ObjectId, ref: 'Book'}]
});

module.exports = mongoose.model('WishList', wishList);
