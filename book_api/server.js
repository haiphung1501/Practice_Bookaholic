const { response, request } = require('express');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var mongoose = require('mongoose');
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config()
var db = mongoose.connect('process.env.mongoDB_URL', () => {
    console.log("Connected to MongoDB");
}) ;
var Book = require('./model/book');
var WishList = require('./model/wishList');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(morgan("common"));

app.get('/book', function(req, res) {
    Book.find({}, function(err, books) {
        if (err) {
            res.status(500).send({error: "Could not fetch books"});
        } else {
            res.send(books);
        }
    });
});
app.get('/wishlist', function(req, res) {
    WishList.find({}).populate({path: 'books', model: "Book"}).exec(function(err, wishLists){
        if (err) {
            res.status(500).send({error: "Could not fetch wishLists"});
        }
        else {
            res.status(200).send(wishLists);
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
app.post('/wishlist', function(req, res){
    var wishList = new WishList();
    wishList.title = req.body.title;

    wishList.save(function(err, newWishList) {
        if (err) {
            res.status(500).send({error: "Could not create Wish List"});
        }
        else {
            res.send(newWishList);
        }
    });
});

app.put('/wishlist/book/add', function(req, res) {
    Book.findOne({_id: req.body.bookId}, function(err, book) {
        if (err) {
            res.status(500).send({error:" Could not add item to wishList"});
        }
        else {
            WishList.update({_id: req.body.wishListId}, {$addToSet: {
                books: book._id}}, function(err, wishList) {
                    if (err) {
                        res.status(500).send({error:" Could not add item to wishList"});
                    }
                    else {
                        res.send("Successfully added to wishlist");
                    }
                });
        }
    });
});
app.listen(3000, function() {
    console.log("Book API running on port 3000! ")
});

