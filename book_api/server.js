const { response } = require('express');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/book-api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000, function() {
    console.log("Book API running on port 3000! ")
});

