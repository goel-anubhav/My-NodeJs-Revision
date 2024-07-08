const express = require('express')
const app = express();

app.get('', (req, res)=>{
    res.send("Hello, this is my homepage")
});

app.get('/about',(req,res)=>{
    res.send("Welcome To About Us Page")
})
app.listen(5000)