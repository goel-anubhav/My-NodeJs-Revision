const express = require('express')
require('./config')
const Products = require('./product')
const app = express();
app.use(express.json())

app.put('/put/:_id', async (req, resp) => {
    console.log(req.params)
    let data = await Products.updateOne(
        req.params,

        {
            $set: req.body
        }
    )
    resp.send({
        message: "Data Updated Succesfully",
        UpdatedData: data
    })
})
app.listen(5000)