const fs = require('fs')
// const uuid = require('uuid');


const listProduct = './product.json'
const db = require('../config/database')
const { v4: uuid } = require('uuid');
const { log } = require('console');

// app.get('/api/customers', async (req,res)=> {
//   const customers = await db('customer').select('id', 'username')
//   return res.status(200).json({ data: customers})
// })

const getData = async (req, res) => {
  const data = await db('product').select('id', 'name', 'price', 'quantity')  
  res.status(200).json({ data })
}

const getProductDetail = async(req, res) => {
  const { id } = req.params
  const [data] = await db('product').where({id}).select('id', 'name', 'price', 'quantity')
  if (!data) return res.status(404).json({ message: 'Data not found' })

  return res.status(200).json({ message: 'Berhasil mengambil data', data })
}

const createProduct = async(req, res) => {
  const { nama, price, qty } = req.body;

  const [data] = await db('product').insert({id: uuid(), name: nama, price, quantity: qty}).returning(['id', 'price', 'name'])
  return res.status(200).json({ message: 'Berhasil menyimpan data', data })

};


const updateProduct = async(req, res) => {
  const { id } = req.params;
  const { nama, price, qty } = req.body;
  const data = await db('product').where({id}).update({ name: nama, price, quantity: qty})
  return res.status(200).json({ message: 'Berhasil mengubah data', data:{id: uuid(), name: nama, price, quantity: qty} })
};

const deleteProduct = async(req, res) => {
  const { id } = req.params;
  const { nama, price, qty } = req.body;
  const data = await db('product').where({id}).del()
  return res.status(200).json({ message: 'Berhasil menghapus data', data:{id: uuid(), name: nama, price, quantity: qty} })
};


module.exports = { getData, getProductDetail, createProduct, updateProduct, deleteProduct }
