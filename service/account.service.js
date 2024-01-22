const db = require('../config/database')
const { v4: uuid } = require('uuid');

const getData = async(req, res) => {
  const { id } = req.params

  const [data] = await db('customer').where({id}).select('id', 'username', 'password', 'email', 'balance')

  if (!data) return res.status(404).json({ message: 'Data not found' })

  return res.status(200).json({ message: 'akun anda', data })
}

module.exports = { getData }
