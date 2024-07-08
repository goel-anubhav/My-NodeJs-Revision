const http = require('http');
const fs = require('fs');
const path = require('path')
const dirPath = path.join(__dirname,'crud');
const filePath= `${dirPath}/crud.txt`;

fs.writeFileSync(filePath,'Hello Guys Anubhav Goel This Side');
