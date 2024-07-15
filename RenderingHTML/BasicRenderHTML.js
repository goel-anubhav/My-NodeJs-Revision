const express = require('express')
const app = express();

app.get("", (req, resp)=>{
    resp.send(`<h1>Hello, From Anubhav</h1> <a href="/about">Go To About Us Page</a>`)
})

app.get("/about",(req,resp)=>{
    resp.send(`
        <input type="text" placeholder="UserName" value=${req.query.name} /> 
        <button>Sample Button</button>
        <a href="/">Go To Home Us Page</a>
        `);   
        // http://localhost:5000/about?name=anubhav
})

app.get("/json",(req,resp)=>{
    resp.send({name:"Anubhav", email:"anubhavgoyal12062001@gmail.com",contact:"9355079966"})
})

app.get("/multijson",(req,resp)=>{
    resp.send([{name:"Anubhav", email:"anubhavgoyal12062001@gmail.com",contact:"9355079966"},
        {name:"Anubhav1", email:"anubhavgoyal12062001@gmail.com",contact:"9355079966"},
        {name:"Anubhav2", email:"anubhavgoyal12062001@gmail.com",contact:"9355079966"},
        {name:"Anubhav3", email:"anubhavgoyal12062001@gmail.com",contact:"9355079966"},
        {name:"Anubhav4", email:"anubhavgoyal12062001@gmail.com",contact:"9355079966"},
        {name:"Anubhav5", email:"anubhavgoyal12062001@gmail.com",contact:"9355079966"},

    ])
})




app.listen(5000)