const express = require('express')
const dbconnect = require('../MongoDB/ReadData2Config')
const app = express();

app.use(express.json)
app.post('/',async(req,resp)=>{
    console.log(req.body)
    let data = await dbconnect();
    let result = data.insertOne(req.body)
    resp.send(result)
})
app.listen(7000)