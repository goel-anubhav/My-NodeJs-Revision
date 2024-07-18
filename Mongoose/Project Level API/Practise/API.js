const express = require('express')
require('./Configuration')
const Products = require('./Schema&Models')
const app = express();
app.use(express.json())

app.get('/',async(req,resp)=>{
    let data = await Products.find()
    resp.send(data)
})

app.post('/post',async(req,resp)=>{
    let data = await Products.create(req.body)
    resp.send(req.body)
})
app.delete('/delete/:_id',async(req,resp)=>{
    let data = await Products.deleteOne(req.params)
    resp.send(data)
})


app.put('/put/:_id',async(req,resp)=>{
    let data = await Products.updateOne(
        req.params,
        {
            $set: req.body
        }
    )
    resp.send(data)
})
app.listen(5000)