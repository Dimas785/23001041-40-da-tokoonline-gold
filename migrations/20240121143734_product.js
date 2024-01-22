/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('product', (table)=> {
        table.uuid('id').primary()
        table.string('name', 50)
        table.integer('price')
        table.integer('quantity')
        table.timestamp
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
