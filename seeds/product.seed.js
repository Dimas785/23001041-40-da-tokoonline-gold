/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const { v4: uuid } = require('uuid')
const { faker } = require('@faker-js/faker')


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('product').del()
  await knex('product').insert([
    {id: uuid(), name: faker.commerce.product(), price: Number(faker.commerce.price({ min: 10000, max: 20000 })), quantity: "99" },
    {id: uuid(), name: faker.commerce.product(), price: Number(faker.commerce.price({ min: 10000, max: 20000 })), quantity: "99" },
    {id: uuid(), name: faker.commerce.product(), price: Number(faker.commerce.price({ min: 10000, max: 20000 })), quantity: "99" },
    {id: uuid(), name: faker.commerce.product(), price: Number(faker.commerce.price({ min: 10000, max: 20000 })), quantity: "99" },
    {id: uuid(), name: faker.commerce.product(), price: Number(faker.commerce.price({ min: 10000, max: 20000 })), quantity: "99" },
  ]);
};
