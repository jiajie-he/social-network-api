const router = require('express').Router();
const {
    getThoughts,
    postThought,
    getOneThought,
    updateThought,
    removeThought,
    postReaction,
    removeReaction
} = require('../../controllers/thoughtController') 

router.route('/').get(getThoughts).post(postThought)

router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(removeThought);

router.route('/:thoughtId/reactions').post(postReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;