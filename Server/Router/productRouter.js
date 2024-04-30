const {Router} = require('express')
const productRouter = Router()

const getAllProduct = require('../Controller/productController.js')

productRouter.get('/', getAllProduct)


module.exports = productRouter