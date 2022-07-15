var mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    publishedDate: {
        type: String,
    },

    genre: {
        type: [String],
    },
    author: {
        type: String,
    },
    likes: {type: Number, default: 0}
});

let Book = mongoose.model("Book", bookSchema)
module.exports = {Book};
