const router = require('express').Router();
const {
    getUsers,
    postUser,
    getOneUser,
    updateUser,
    removeUser,
    postFriend,
    removeFriend
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(postUser)

router.route('/:userId').get(getOneUser).put(updateUser).delete(removeUser)

router.route('/:userId/friend/:friendId').post(postFriend).delete(removeFriend);

module.exports = router;