// In this method we are going to use another file also to save our configuration
const dbconnect=require('./ReadData2Config')
const main = async ()=>{
    let data = await dbconnect();
    data  = await data.find().toArray();
    console.warn(data);
}
main()

// console.warn(dbconnect())