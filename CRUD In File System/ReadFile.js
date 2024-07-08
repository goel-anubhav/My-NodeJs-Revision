const fs = require('fs')
const path= require('path')
const dirPath= path.join(__dirname,'crud');
const filePath = `${dirPath}/crud.txt`

fs.readFile(filePath,'utf-8',(err,item)=>{    //UTF-8 converts buffer binary digits to simple text
    console.log(item)
})