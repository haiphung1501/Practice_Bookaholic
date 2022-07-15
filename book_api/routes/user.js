const { Router } = require('express');
const userController = require('../controllers/userController');
const router = require('express').Router();

//ADD BOOK
router.post("/", userController.addUser);
//GET ALL
router.get('/', userController.getAllUser);
//GET 1
router.get('/:id', userController.getAnUser);
//UPDATE 1 BOOK
router.put("/:id", userController.updateUser);
//DELETE 1 BOOK
router.delete("/:id", userController.deleteUser)

module.exports = router;