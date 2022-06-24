const { response } = require('express');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var books = [
    {
        "id" : "B001",
        "title": "Life of Pi"
    },
    {
        "id" : "B002",
        "title" : "The Destroyer"
    },
    {
        "id" : "BO03",
        "title" : "Lord of the Ring"
    },
    {
        "id" : "BO04",
        "title" : "Exodia"
    },
];

app.get('/books', function(request, response) {
    response.send(books);
});

app.post('/books', function(req, res) {
    var book = req.body;
    if (!book || book.title === "") {
        res.status(500).send({error:"Your book must have a title"})
    }
    else 
    {
        books.push(book);
        res.status(200).send(books);
    }
}),

app.put('/books/:bookID', function(req, res) {
    var bookID = req.params.bookID;
    var newtitle = req.body.title;
    if (!newtitle || newtitle == "") {
        res.status(500).send({
            error: "You must provide title"
        })
    }
    else {
        var flag = false;
        for ( var i = 0; i < books.length; i++) {
            var dummy_book = books[i];

            if (dummy_book.id === bookID) {
                books[i].title = newtitle;
                flag = true;
                break;
            }
        }
        if (!flag) {
            res.status(500).send({error:"Book not found"});
        }
        else {
            res.send(books);
        }
    }
}),

app.listen(3000, function() {
    console.log('First API running on port 3000!');
});
