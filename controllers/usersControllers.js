const user = require('../models/User');
const note = require('../models/Note');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = requirea('bcrypt');

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async(req, res) =>{
    const users = await User.find().select('-password').lean()
    if(!users){
        return res.status(400).json({message:'No users found'})
    }
    res.json(users);
})

// @desc Create new users
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async(req, res) =>{
    const {username, password, roles} = req.body;
    //confirm data
    if(!username || !password || !Array.isArray(roles) || !roles.length)
    {
        return res.status(400).json({message: 'All fields are rerquired'});
    }

    //check for duplicates
    const duplicate = await User.findOne({username}).lean().exec()
    if(duplicate){
        return res.status(400).json({message:'Duplicate Username'});

    }

    //Hash passwword
    const hashedPwd = await bcrypt.hash(password, 10); //salt round

    const userObject = {username, "password": hashedPwd, roles};

    //create and store new user
    const user = await User.create(userObject);

    if(user) {
        //created
        res.status(201).json({message : `New user ${username} created`})

    }
    else
    {
        res.status(400).json({message: 'Invalid user data recieved'})
    }
})

// @desc Update a user
// @route PATCh /users:id
// @access Private
const updateUser = asyncHandler(async(req, res) =>{
    
})


// @desc delete a user
// @route DELETE /users:id
// @access Private
const deleteUser = asyncHandler(async(req, res) =>{
    
})

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}