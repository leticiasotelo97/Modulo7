/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('productos',(table) =>{
        table.increments('id');
        table.string('nombre').notNullable().unique();
        table.string('marca');
        table.string('categoría');
        table.string('dimensiones');
        table.integer('cantidad').unsigned().notNullable();
        table.decimal('precio',10,2);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('productos')
};
