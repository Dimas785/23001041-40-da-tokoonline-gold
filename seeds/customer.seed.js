/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const { v4: uuid } = require('uuid')
const { faker } = require('@faker-js/faker')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('customer').del()
  await knex('customer').insert([
    {id: uuid(), username: 'dimas',  password: '123', email: 'dimas123@gmail.com', balance: 500000},
  ]);
};
