const router = require('express').Router();
const {
    getThoughts,
    postThought,
    getOneThought,
    updateThought,
    removeThought
} = require('../../controllers/thoughtController') 

router.route('/').get(getThoughts).post(postThought)

router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(removeThought);


module.exports = router;