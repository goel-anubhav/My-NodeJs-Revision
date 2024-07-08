const fs = require('fs')
const path = require('path')
const dirPath=path.join(__dirname, 'crud');
const filePath = `${dirPath}/crud.txt`

fs.appendFile(filePath,'and I am a software developer',(err)=>{
    if(!err) console.log("File Updated Sir")
})