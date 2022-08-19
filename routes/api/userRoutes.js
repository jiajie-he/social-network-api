const router = require('express').Router();
const {
    getUsers,
    postUser,
    getOneUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(postUser)

router.route('/:userId').get(getOneUser)

module.exports = router;