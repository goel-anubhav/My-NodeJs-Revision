const express = require('express')
require('./config')
const Products = require('./product')
const app = express()
app.use(express.json())

app.get('/get',async(req,resp)=>{
    let data = await Products.find()
    resp.send(data)
})
app.listen(5000)