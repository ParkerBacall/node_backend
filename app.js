const express = require('express')
const app = express()
const port = process.env.PORT || 8001
const queries = require('./queries.js')

app.listen(port, () =>{
    console.log(`listening on ${port}`)
})

app.get('/', (request, response) => {
    queries.listAll().then(todos => response.send(todos))
})