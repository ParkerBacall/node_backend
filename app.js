const express = require('express')
const app = express()
const port = process.env.PORT || 8001
const queries = require('./queries.js')

app.listen(port, () =>{
    console.log(`listening on ${port}`)
})

app.get('/todos', (request, response) => {
    queries.listAll().then(todos => response.send(todos))
})

app.get('/todos/:id', (request, response) => {
    queries.showTodo(request.params.id).then(todo => response.send(todo))
})