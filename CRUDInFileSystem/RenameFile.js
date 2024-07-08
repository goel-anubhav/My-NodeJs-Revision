const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'crud')
const filePath = `${dirPath}/crud.txt`

fs.rename(filePath,`${dirPath}/renamedFile.txt`,(err)=>{
    if(!err) console.log("File Renamed Anubhav Sir")
} )