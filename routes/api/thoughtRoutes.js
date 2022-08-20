const router = require('express').Router();
const {
    getThoughts,
    postThought
} = require('../../controllers/thoughtController') 

router.route('/').get(getThoughts).post(postThought)

module.exports = router;