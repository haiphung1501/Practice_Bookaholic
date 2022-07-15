const bookController = require('../controllers/bookController');

const router = require('express').Router();

//ADD BOOK
router.post("/",bookController.addBook);

router.get('/', bookController.getAllBook);

module.exports = router;