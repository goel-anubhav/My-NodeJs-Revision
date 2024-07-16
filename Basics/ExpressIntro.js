const express = require('express')
const app = express();

app.get('', (req, res)=>{
    console.log("Data Sent By Browser",req.query) // http://localhost:5000/?name=anubhav
    console.log("Data Sent By Browser",req.query.name) // http://localhost:5000/?name=anubhav

    res.send("Hello, this is my homepage")
});

app.get('/about',(req,res)=>{
    res.send("Welcome To About Us Page")
})
app.listen(5000)