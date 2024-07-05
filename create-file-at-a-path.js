const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'Req'); //folder should be existing
// console.warn(dirPath)

for(i=0;i<5;i++){

    // Generating file at root 

    // fs.writeFileSync("hello"+i+".txt","Generating Files");
    
    //another method to add 1,2,3..... in the file name

    // fs.writeFileSync(`hello${i}.txt`,"Generating Files");
    
    // Generating File at a path
    fs.writeFileSync(dirPath+`/hello${i}.txt`,"Generating Files");


}