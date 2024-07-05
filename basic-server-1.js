// const http = require("http");

// http.createServer((req, resp) => {
//     resp.write("Hello Guys, Anubhav this side");
//     resp.end();
// })
//     .listen(4200);


//Another Method 
// we can use HTML Tags here

const http = require('http');
const datacontrol = (req, resp) =>
    {
        resp.write("<h1>Hello This is Anubhav</h1>");
        resp.end();
    }

    http.createServer(datacontrol).listen(1002);