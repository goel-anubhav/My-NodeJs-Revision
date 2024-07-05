//We will take input from the command line and use it in the webpage as well as create a file using it

// console.log(process.argv) //input in command line: node .\input-from-command-line.js hello
// console.log(process.argv[2]) //input in command line: node .\input-from-command-line.js hello

const fs = require('fs');
const input = process.argv ;
//input to create file with name hello.txt and data in it is 'hi': node .\input-from-command-line.js hello.txt hi 
// fs.writeFileSync(input[2],input[3]) 

//using if condition

// to create file: node .\input-from-command-line.js add hello.txt 'Anubhav This Side'

// to remove: node .\input-from-command-line.js remove  hello.txt 

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4])
}else if(input[2]=='remove')
{
    fs.unlinkSync(input[3]);
}
else(
    console.log("Invalid Output")
)