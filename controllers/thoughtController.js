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
    },
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) => {
                if (!thought) {
                    return res.status(404).json({ message: "invalid ID" })
                }
                res.json(thought)
            })
            .catch((err) => res.status(500).json(err))
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            {
                runValidators: true,
                new: true
            })
            .then((updateThought) => {
                if (!updateThought) {
                    return res.status(404).json({ message: "invalid ID" })
                }
                res.json(updateThought)
            })
            .catch((err) => res.status(500).json(err))
    },
    removeThought(req, res) {
        Thought.findByIdAndDelete({ _id: req.params.thoughtId })
            .then((removeThought) => {
                if (!removeThought) {
                    return res.status(404).json({ message: "invalid ID" })
                }
                return User.findOneAndUpdate(
                    { thoughts: req.params.thoughtId },
                    { $pull: { thoughts: req.params.thoughtId } },
                    { new: true }
                  )
            })
            .then((userData) => {
                if (!userData) {
                    return res.status(404).json({ message: "invalid ID" })
                }
                res.json(userData)
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })    
    },
    postReaction(req, res) {
        Thought.findOneAndUpdate(
            {
                _id: req.params.thoughtId 
            },
            {
                $addToSet: { reactions: req.body }
            },
            {
                runValidators: true, new: true 
            }
        )
        .then((thought) => {
            if (!thought) {
                return res.status(404).json({ message: "invalid ID" })
            }
            res.json(thought)   
        })
        .catch((err) => res.status(500).json(err))
    },
    removeReaction (req, res) {
        Thought.findOneAndUpdate(
            {
                _id: req.params.thoughtId 
            },
            {
                $pull: { reactions: { reactionId: req.params.reactionId } }
            },
            {
                runValidators: true, new: true 
            }
        )
        .then((thought) => {
            if (!thought) {
                return res.status(404).json({ message: "invalid ID" })
            }
            res.json(thought)   
        })
        .catch((err) => res.status(500).json(err))
    }
}