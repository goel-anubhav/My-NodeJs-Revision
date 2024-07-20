const fs = require('fs');
const path = require('path')
const dirPath = path.join(__dirname, 'crud')
const filePath = `${dirPath}/renamedFile.txt`

fs.unlinkSync(filePath)