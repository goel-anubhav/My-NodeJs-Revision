//Rendering pages from public folder

const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'public')
// console.log(publicPath)
// app.use(express.static(publicPath)); //load all the static file


app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
})

app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/contact',(req,resp)=>{
    resp.sendFile(`${publicPath}/contact.html`)
})

app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
})

app.listen(5000);
