const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors')

const getAllUsers = async(req, res) => {
  const users = await User.find({role: 'user'}).select('-password')
  res.status(StatusCodes.OK).json({users})
}
const getSingleUsers = async(req, res) => {
  const user = await User.findOne({_id: req.params.id}).select('-password')
  if(!user){
    throw new CustomError.NotFoundError(`No user with id: ${req.params.id}`)
  }
  res.status(StatusCodes.OK).json({user})
}
const showCurrentUser = async(req, res) => {
  res.send('show current user')
}
const updateUser = async(req, res) => {
  res.send('update user')
}
const updateUserPassword = async(req, res) => {
  res.send('update user password')
}

module.exports = {
  getAllUsers,
  getSingleUsers,
  showCurrentUser,
  updateUser,
  updateUserPassword
}