const http = require("http");
 http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify({name:'Anubhav',email:'anubhav@123'}) );
resp.end();
}).listen(1234);
