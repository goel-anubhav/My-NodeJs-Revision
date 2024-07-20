const os = require('os')
console.log(os.arch()); //Show Architecture
console.log(os.freemem()/(1024*1024*1024)) //Show Free RAM
console.log(os.totalmem() / (1024 * 1024 * 1024)); //Show Total RAM
console.log(os.hostname()) //Check PC hostname
console.log(os.platform()) //Show the os using
console.log(os.userInfo())
