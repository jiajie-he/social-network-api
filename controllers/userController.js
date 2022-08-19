const User = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find()
            //return to use as an array obj
            // (users) -> is the result of user.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    postUser(req, res) {
        User.create(req.body)
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err))
    },
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
            // .populate('thoughts')
            .populate('friends')
            .then((userData) => {
                if (!userData) {
                    return res.status(404).json({ message: "invalid ID" })
                }
                res.json(userData)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json(err)
            })
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            {
                runValidators: true,
                new: true
            })
            .then((updateUser) => {
                if (!updateUser) {
                    return res.status(404).json({ message: "invalid ID" })
                }
                res.json(updateUser)
            })
            .catch((err) => { res.status(500).json(err) })
    }
}