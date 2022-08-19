const User = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find()
        //return to use as an array obj
        // (users) -> is the result of user.find()
        .then((users)=>res.json(users)).catch((err) => res.status(500).json(err))
    },
    postUser(req, res) {
        User.create(req.body).then((userData)=>res.json(userData)).catch((err) => res.status(500).json(err))
    }
}