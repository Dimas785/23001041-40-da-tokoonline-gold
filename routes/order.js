const router = require('express').Router()
const orderService = require('../service/order.service')

router.get('/', orderService.getOrder)
router.get('/:id', orderService.getOrderDetail)
router.post('/checkout', orderService.checkout)

router.post('/', orderService.createOrder)
router.delete('/:id', orderService.clearOrder)

module.exports = router
