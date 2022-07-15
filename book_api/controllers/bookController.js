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

    getABook: async(req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            res.status(200).json(book)
        }catch(err) {
            res.status(500).json(err);
        }
    },
    
    updateBook: async(req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            await book.updateOne({$set: req.body});
            res.status(200).json("Updated");
        } catch(err) {
            res.status(500).json(err);
        }
    },

    deleteBook: async(req, res) => {
        try {
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted sucessfully");
        } catch(err) {
            res.status(500).json(err);
        }
    }
};

module.exports = bookController;