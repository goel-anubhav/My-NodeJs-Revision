const dbconnect = require('./ReadData2Config')


const updateData= async ()=>{
let data = await dbconnect();
let result = await data.updateOne(
    {name:'Alpha'},{$set:{name:'Alpha Updated'}}
)
console.warn(result)
}
updateData()