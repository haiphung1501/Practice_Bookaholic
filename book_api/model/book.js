var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var book = new Schema({
    title: String,
    genre: String,
    likes: {type: Number, default: 0}
});

module.exports = mongoose.model('Book', book);
