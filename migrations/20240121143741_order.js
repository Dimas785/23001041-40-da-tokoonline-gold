/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('order', (table)=> {
        table.uuid('id').primary()
        table.uuid('account_id').unsigned()
        table.foreign('account_id').references('customer.id').deferrable('deferred')
        table.uuid('product_id').unsigned()
        table.foreign('product_id').references('product.id').deferrable('deferred')
        table.string('quantity')
        table.string('amount')
        table.boolean('status')
        table.timestamp
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
