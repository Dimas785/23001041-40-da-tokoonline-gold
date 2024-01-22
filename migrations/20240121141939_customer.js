/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('customer', (table)=> {
        table.uuid('id').primary()
        table.string('username', 20)
        table.string('password')
        table.string('email')
        table.integer('balance')
        table.timestamp
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
