var mongoose = require('mongoose');
const { User } = require('./user');

const commentSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.OBjectId,
        ref: "User"
    },

    info: {
        type: String
    },
});

let Comment = mongoose.model("Comment", commentSchema);
module.exports = {Comment};