const {Router} = require('express');
const wishListController = require('../controllers/wishListController');
const router = require('express').Router();

router.post("/", wishListController.addWishList);


module.exports = router;