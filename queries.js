const connection = require('./knexfile')['development']
const database = require('knex')(connection)

module.exports = {
    listAll(){
        return database('todos')
    },

    showTodo(id){
        return database('todos')
          .where('id', id)
       },
    create(input){
        return database('todos')
         .insert(input)
          .returning('*')
    },
    delete(id){
        return database('todos')
          .where('id', id)
          .delete()
      },
    updateTodo(id, input){
        return database('todos')
         .where('id', id)
         .update(input)
         .returning('*')
    }
    
    
}