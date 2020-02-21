
exports.up = function(knex) {
    return knex.schema.createTable('todos', (t) => {
        t.increments('id')
        t.string('text')
    })
};

exports.down = function(knex) {
  
};
