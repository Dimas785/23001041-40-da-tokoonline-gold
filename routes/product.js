const router = require('express').Router()
const productService = require('../service/product.service')

router.get('/', productService.getData)
router.get('/:id', productService.getProductDetail)

router.post('/', productService.createProduct)
router.put('/:id', productService.updateProduct)
router.delete('/:id', productService.deleteProduct)



module.exports = router
