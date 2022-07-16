const { Router } = require('express');
const userController = require('../controllers/userController');
const router = require('express').Router();


router.post("/", userController.addUser);

router.get('/', userController.getAllUser);

router.get('/:id', userController.getAnUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

router.put("/:id/wishlist", userController.updateWishlist)

module.exports = router;