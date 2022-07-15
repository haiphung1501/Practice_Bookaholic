const { Router } = require('express');
const bookController = require('../controllers/bookController');

const router = require('express').Router();

//ADD BOOK
router.post("/",bookController.addBook);
//GET ALL
router.get('/', bookController.getAllBook);
//GET 1
router.get('/:id', bookController.getABook);
//UPDATE 1 BOOK
router.put("/:id", bookController.updateBook);
//DELETE 1 BOOK
router.delete("/:id", bookController.deleteBook)
module.exports = router;