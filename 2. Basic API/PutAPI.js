const express = require('express')
const dbconnect = require('../MongoDB/ReadData2Config')
const app = express();

app.use(express.json());
//PUT Hardcoded data
// app.put('/',async(req,resp)=>{
//      let data = await dbconnect();
//      let result = data.updateOne(
//         {name:"Omega"},
//         { $set:{name:"Omega 2"}}
//     )
//     resp.send({result:'update'})
// })


app.put('/:name',async(req,resp)=>{
    let data = await dbconnect();
    let result = await data.updateOne(
       {name:req.params.name},    // params is used to map
       { $set:req.body}
   )
   resp.send({result:'update'})
})


app.listen(5000)


