const router = require('express').Router()
const productRouter = require('./product')
const orderRouter = require('./order')
const accountRouter = require('./account')

router.use('/api/products', productRouter)
router.use('/api/orders', orderRouter)
router.use('/api/account', accountRouter)

module.exports = router
