const connection = require('./knexfile')['development']
const database = require('knex')(connection)

module.exports = {
    listAll(){
        return database('todos')
    },

    showTodo(id){
        return database('todos')
          .where('id', id)
       }
}