const {Router} = require('express')
const cartRouter = Router()

const {getCartById, updateCart} = require('../Controller/cartController.js')

cartRouter.get('/:id', getCartById)
cartRouter.put('/:id', updateCart)



module.exports = cartRouter