const express = require('express')
const app = express();

const reqFilter = require('./middleware') //getting middleware from another file

const route = express.Router();
route.use(reqFilter); //for multiple

// app.use(reqFilter) //for single or less 

app.get("",(req,resp)=>{
    resp.send("Welcome To Home Page")
})


//applied on single route
app.get("/users", reqFilter,(req,resp)=>{ 
    resp.send("Welcome To Users Page")
})


// Middleware on multiple components
route.get("/contact",(req,resp)=>{
    resp.send("Welcome To Contact Page")
})

route.get("/about",(req,resp)=>{
    resp.send("Welcome To About Page")
})

app.use('/',route);
app.listen(5000)