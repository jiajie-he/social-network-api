const router = require('express').Router();
const {
    getUsers,
    postUser,
    getOneUser,
    updateUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(postUser)

router.route('/:userId').get(getOneUser).put(updateUser)

module.exports = router;