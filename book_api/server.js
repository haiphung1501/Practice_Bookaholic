const { response } = require('express');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/book_api');

var Book = require('./model/book');
var WishList = require('./model/wishList');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/book', function(req, res) {
    Book.find({}, function(err, books) {
        if (err) {
            res.status(500).send({error: "Could not fetch books"});
        } else {
            res.send(books);
        }
    });
});
app.post('/book', function(req, res) {
    var book = new Book();
    book.title = req.body.title;
    book.genre = req.body.genre;
    book.save(function(err, savedBook) {
        if (err) {
            res.status(500).send({error: "Could not save Book"});
        } else {
            res.send(savedBook);
        }
    });
});
app.listen(3000, function() {
    console.log("Book API running on port 3000! ")
});

