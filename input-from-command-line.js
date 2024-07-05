//We will take input from the command line and use it in the webpage as well as create a file using it

// console.log(process.argv) //input in command line: node .\input-from-command-line.js hello
// console.log(process.argv[2]) //input in command line: node .\input-from-command-line.js hello

const fs = require('fs');
const input = process.argv ;
fs.writeFileSync(input[2],input[3]) //input to create file with name hello.txt and data in it is 'hi': node .\input-from-command-line.js hello.txt hi 

