const express = require('express')
const app = express();

const reqFilter = require('./middleware')
// app.use(reqFilter)

app.get("",(req,resp)=>{
    resp.send("Welcome To Home Page")
})


app.get("/users", reqFilter,(req,resp)=>{ //applied on single route
    resp.send("Welcome To Users Page")
})

app.get("/contact",(req,resp)=>{
    resp.send("Welcome To Contact Page")
})

app.get("/about",(req,resp)=>{
    resp.send("Welcome To About Page")
})
app.listen(5000)