const db = require('../config/database')
const { v4: uuid } = require('uuid');


const getOrder = async(req, res) => {
  const data = await db('order').select('id', 'account_id', 'product_id', 'quantity', 'amount', 'status')  
  res.status(200).json({ data })
}

const getOrderDetail = async(req, res) => {
  const { id } = req.params
  const [data] = await db('order').where({id}).select('id', 'account_id', 'product_id', 'quantity', 'amount', 'status')

  if (!data) return res.status(404).json({ message: 'Data not found' })

  return res.status(200).json({ message: 'Berhasil mengambil data', data })
}

const createOrder = async(req, res) => {
  const { id, account_id, product_id, quantity } = req.body;

  const [product] = await db('product').where({id: product_id}).select('id', 'name', 'price', 'quantity')
  const [data] = await db('order').insert({id: uuid(), account_id, product_id, quantity, amount: Number(quantity) * Number(product.price), status: false}).returning(['id', 'account_id', 'product_id', 'quantity'])
  return res.status(200).json({ message: 'Berhasil menyimpan data', data })
}

const clearOrder = async(req, res) => {
  const { id } = req.params;
  const { account_id, product_id, quantity } = req.body;
  const data = await db('order').where({id}).del()
  return res.status(200).json({ message: 'Berhasil menghapus data', data:{id: uuid(), account_id, product_id, quantity} })
}

const checkout = async(req, res) => {
 const { order_id, account_id } = req.body
 const { id } = req.params
 const [order] = await db('order').where({id: order_id}).select('id', 'account_id', 'product_id', 'quantity', 'amount')
 const [customer] = await db('customer').where({id: account_id}).select('id', 'username', 'password', 'email', 'balance')
 if (Number(customer.balance) - Number(order.amount) >= 0) {
  const data_order = await db('order').where({id: order_id}).update({ status: true })
  const data_customer = await db('customer').where({id: account_id}).update({ balance: Number(customer.balance) - Number(order.amount) })
  return res.status(200).json({ message: 'berhasil checkout' , data: {balance: Number(customer.balance) - Number(order.amount)}})
 }
 return res.status(200).json({ message: 'uang anda tidak cukup', data: {balance: Number(customer.balance), total_order: Number(order.amount)} })
}

module.exports = { getOrder, createOrder, clearOrder, getOrderDetail, checkout }
