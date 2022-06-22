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
        "id" : "BOO03",
        "title" : "Lord of the Ring"
    },
    {
        "id" : "BOO04",
        "title" : "Exodia"
    },
];

app.get('/', function(request, response) {
    response.send(books);
});

app.post('/', function(req, res) {
    var book = req.body;
    if (!book || book.title == "") {
        res.status(500).send({error:"Your book must have a title"})
    }
    else 
    {
        books.push(book);
        res.status(200).send(books);
    }
}),

app.listen(3000, function() {
    console.log('First API running on port 3000!');
});
