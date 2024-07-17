const express = require('express')
const dbconnect = require('../MongoDB/ReadData2Config')
const app = express();

app.use(express.json());
//PUT Hardcoded data
app.put('/',async(req,resp)=>{
     let data = await dbconnect();
     let result = data.updateOne(
        {name:"Omega"},
        { $set:{name:"Omega 2"}}
    )
    resp.send({result:'update'})
})
app.listen(5000)


