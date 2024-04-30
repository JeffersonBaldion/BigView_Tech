const {Router} = require('express')
const userRouter = Router()

const {getAllUser, getUserById, postUser, getUserByEmail, deleteUser, updateUser} = require('../Controller/userController.js')

userRouter.get('/', getAllUser)
userRouter.get('/:id', getUserById)
userRouter.post('/getUser', getUserByEmail)
userRouter.post('/newUser', postUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)


module.exports = userRouter