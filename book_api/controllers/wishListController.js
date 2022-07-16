const {WishList} = require("../model/wishList");
const {Book} = require("../model/book");
const {User} = require("../model/user");

const wishListController = {
    
    addWishList: async(req, res) => {
        try {
            const newWishList = new WishList(req.body);
            const savedWishList = await newWishList.save();
            res.status(200).json(savedWishList);
        }
        catch(err) {
            res.status(500).json(err);
        }
    },

}