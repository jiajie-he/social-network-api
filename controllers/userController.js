const User = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find()
        //return to use as an array obj
        // (users) -> is the result of user.find()
        .then((users)=>res.json(users))
        .catch((err) => res.status(500).json(err))
    },
    postUser(req, res) {
        User.create(req.body)
        .then((userData)=>res.json(userData))
        .catch((err) => res.status(500).json(err))
    },
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userID})
        .populate('thoughts')
        .populate('friends')
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: "invalid ID"})
            }
            res.json(user)
        })
        .catch((err) => {res.status(500).json(err)})
    }
}