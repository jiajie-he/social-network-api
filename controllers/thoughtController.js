const { User, Thought } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
          .sort({ createdAt: -1 })
          .then((thoughts) => {res.json(thoughts)})
          .catch((err) => res.status(500).json(err))
      },
    postThought(req, res) {
        Thought.create(req.body) 
        .then((thoughtData)=> {
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                { $push: { thoughts: thoughtData._id}},
                {new: true}
                )
        })
        .then((userData) => {
            if (!userData) {
                return res.status(404).json({ message: "invalid ID" })
            }
            res.json(userData)
        })
        .catch((err) => res.status(500).json(err))
    }
}