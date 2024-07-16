const {MongoClient} = require('mongodb');
const database='e-com'
const url = 'mongodb://localhost:27017'
const client= new MongoClient(url);

async function dbconnect()
{
    let result = await client.connect();
    let db= result.db(database);
    return db.collection('products');
}

//First Method
// dbconnect().then((resp)=>{
//     (resp.find().toArray().then((data)=>{
//         console.warn(data)
//     }))
// })


//Second Method(easiest)

const main = async ()=>{
    let data = await dbconnect();
    data  = await data.find().toArray();
    console.warn(data);
}
main()

// console.warn(dbconnect())