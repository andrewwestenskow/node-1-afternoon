const express = require('express')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express()

const port = 5009

//ENDPOINTS

app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct)


//LISTENER

app.listen(port, ()=> {
  console.log(`Listening on port ${port}`)
})