const express = require("express")
const router = express.Router()

const {  getAllUsers,
  getSingleUsers,
  showCurrentUser,
  updateUser,
  updateUserPassword} = require('../controllers/userController')

router.route('/').get(getAllUsers)

router.route('/showMe').get(showCurrentUser)
router.route('/updateUser').post(updateUser)
router.route('/updateUserPassword').post(updateUserPassword)

router.route('/:id').get(getSingleUsers)

module.exports = router