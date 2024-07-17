
const express = require('express');
const dbconnect = require('../MongoDB/ReadData2Config');
const Mongo = require('mongodb')
const app = express();

app.delete('/:id',async(req,resp)=>{
    let data = await dbconnect();
    result=await data.deleteOne({_id:new Mongo.ObjectId(req.params.id)})
    resp.send(result)

});
app.listen(5000)