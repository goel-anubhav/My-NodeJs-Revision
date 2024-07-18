const express = require('express')
require('./config')
const app = express();
const Products = require('./product')
app.use(express.json())

app.delete('/delete/:_id',async(req,resp)=>{
    console.log(req.params)
    let data = await Products.deleteOne(req.params);
    resp.send(data)
})
app.listen(5000)
