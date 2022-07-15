const {User} = require("../model/user");

const userController = {
    getAllUser : async (req,res) => {
        try{
            const users = await User.find();
            res.status(200).send(users);
        }catch (err) {
            res.status(500).json(err);
        }
    },

    addUser: async(req, res) => {
        try {
            const newUser = new User(req.body);
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        }
        catch(err) {
            res.status(500).json(err);
        }
    },

    getAnUser: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user)
        }catch(err) {
            res.status(500).json(err);
        }
    },
    
    updateUser: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            await user.updateOne({$set: req.body});
            res.status(200).json("Updated");
        } catch(err) {
            res.status(500).json(err);
        }
    },

    deleteUser: async(req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted sucessfully");
        } catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = userController;