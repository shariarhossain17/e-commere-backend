const router = require("express").Router()
const productController = require('../controller/product.controlle')


router.route('/')
.get(productController.getAllProduct)
.post(productController.createProduct)



module.exports = router