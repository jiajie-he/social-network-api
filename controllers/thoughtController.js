const Thought = require('../models/Thought');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
          .sort({ createdAt: -1 })
          .then((thoughts) => {res.json(thoughts);})
          .catch((err) => res.status(500).json(err))
      },
}