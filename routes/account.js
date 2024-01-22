const router = require('express').Router()
const accountService = require('../service/account.service')

router.get('/:id', accountService.getData)

module.exports = router