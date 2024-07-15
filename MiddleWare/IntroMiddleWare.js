const express = require('express')
const app = express();

const reqFilter=(req, resp, next)=>{
    console.log('reqFilter');
    next();
}
app.use(reqFilter)

app.get("",(req,resp)=>{
    resp.send("Welcome To Home Page")
})

app.get("/about",(req,resp)=>{
    resp.send("Welcome To About Page")
})

app.get("/users",(req,resp)=>{
    resp.send("Welcome To Users Page")
})

app.get("/contact",(req,resp)=>{
    resp.send("Welcome To Contact Page")
})

app.listen(5000)