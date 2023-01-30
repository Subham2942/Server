const express = require('express');
const router = express.router();
const usersControllers = require('../controllers/usersControllers');


router.route('/')
    .get(usersControllers.getAllUsers)
    .post(usersControllers.createNewUser)
    .patch(usersControllers.updateUser)
    .delete(usersControllers.deleteUser)

module.exports = router;