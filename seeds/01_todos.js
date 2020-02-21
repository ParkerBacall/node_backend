
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {title: 'do me', text: 'ayy'},
        {title: 'yeet', text: 'this worsssks'},
        {title: 'yeet', text: 'sick'}
      ]);
    });
};
