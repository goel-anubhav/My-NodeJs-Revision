const express = require('express')
const EventEmitter = require('events') //Keep EventEmitter in as it is, as it is a class not a variable
const app = express()

const event = new EventEmitter();

let count=0;
event.on("Counting",()=>{
    count++;
    console.log("Event Called",count)
    
})


app.get('/',(req,resp)=>{
    resp.send("Api Called")
    event.emit("Counting")
})
app.get("/one", (req, resp) => {
  resp.send("One Api Called");
  event.emit("Counting");
});
app.get("/two", (req, resp) => {
  resp.send("Two Api Called");
  event.emit("Counting");
});
app.get("/three", (req, resp) => {
  resp.send("Three Api Called");
  event.emit("Counting");
});
app.listen(5000)