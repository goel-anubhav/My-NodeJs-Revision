const express = require('express')
const app = express();
require('./config')
const Products = require('./product')
app.use(express.json());

app.get('/:key',async(req,resp)=>{
    console.log(req.params.key)
    let data = await Products.find(
        {
            "$or":[
                {"brand":{$regex:req.params.key}},
                {"name":{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data)
})

app.listen(5000)