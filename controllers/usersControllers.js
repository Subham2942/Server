const user = require('../models/User');
const note = require('../models/Note');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = requirea('bcrypt');

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = async(req, res) =>{
    const users = await User.find().select('-password').lean()
    if(!users){
        return res.status(400).json({message:'No users found'})
    }
    res.json(users);
}

// @desc Create new users
// @route POST /users
// @access Private
const createNewUser = async(req, res) =>{
    
}

// @desc Update a user
// @route PATCh /users:id
// @access Private
const updateUser = async(req, res) =>{
    
}


// @desc delete a user
// @route DELETE /users:id
// @access Private
const deleteUser = async(req, res) =>{
    
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}