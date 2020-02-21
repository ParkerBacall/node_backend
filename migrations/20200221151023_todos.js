
exports.up = function(knex) {
    return knex.schema.createTable('todos', function(t) {
        t.increments('id')
        t.string('title')
        t.string('text')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('todos');
};
