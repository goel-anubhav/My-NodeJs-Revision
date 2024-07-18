const express = require('express');
require('./config');
const Products = require('./product');

const app = express();
app.use(express.json()) //Convert entered data into JSON
app.post('/post',async (req, resp)=>{
    let data = new Products(req.body);
    let result = await data.save();
    console.log(req.body)
    resp.send("Posting")
})
app.listen(5000)