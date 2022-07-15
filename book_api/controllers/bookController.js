const {Book} = require("../model/book");

const bookController = {
    //ADD BOOK

    getAllBook : async (req,res) => {
        try{
            const books = await Book.find();
            res.status(200).send(books);
        }catch (err) {
            res.status(500).json(err);
        }
    },

    addBook: async(req, res) => {
        //res.status(200).json(req.body)
        try {
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            res.status(200).json(savedBook);
        }
        catch(err) {
            res.status(500).json(err);
        }
    },


};

module.exports = bookController;