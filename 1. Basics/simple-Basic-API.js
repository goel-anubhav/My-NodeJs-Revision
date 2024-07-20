// const http = require("http");
//  http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-Type':'application\json'});
// resp.write(JSON.stringify({name:'Anubhav',email:'anubhav@123'}) );
// resp.end();
// }).listen(1001);


// If the data is another file like I'm creating a file in the folder Req/SimpleBasicAPIData.js

const data = require('../Req/SimpleBasicAPIData')
const http = require('http')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data))
    resp.end();
}).listen(1001)