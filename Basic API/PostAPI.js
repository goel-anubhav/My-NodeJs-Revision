const express = require('express')
const dbconnect = require('../MongoDB/ReadData2Config')
const app = express();

app.use(express.json());
//GET
app.get('/',async(req,resp)=>{
    let data = await dbconnect();
    data=await data.find().toArray();
    console.log(data)
    resp.send(data)
});

//POST
app.post('/',async(req,resp)=>{
    let data = await dbconnect();
    let result = await data.insertOne(req.body)
    resp.send(result)
})
app.listen(5000)


