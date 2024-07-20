const dbconnect = require('./ReadData2Config')


//To delete one data
// const deleteData = async ()=>{
// let data = await dbconnect();
// let result = data.deleteOne({name:"S23"})
// console.warn(data)
// }

// To delete Multiple data

const deleteData = async ()=>{
    let data = await dbconnect();
    let result = data.deleteMany({brand:"Samsung"})
    console.warn(data)
    }
deleteData()