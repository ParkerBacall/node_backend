const express = require('express')
const app = express()
const port = process.env.PORT || 8001
const queries = require('./queries.js')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.listen(port, () =>{
    console.log(`listening on ${port}`)
})

app.get('/todos', (request, response) => {
    queries.listAll().then(todos => response.send(todos))
})

app.get('/todos/:id', (request, response) => {
    queries.showTodo(request.params.id).then(todo => response.send(todo))
})

app.post('/todos', (request, response) => {
    queries.create(request.body).then(todo => response.send(todo))
})

app.delete('/todos/:id', (request, response) => {
    queries.delete(request.params.id).then(response.send("todo deleted"))
})

app.put('/todos/:id', (request, response)=> {
    queries.updateTodo(request.params.id, request.body).then(todo => response.send(todo))
})