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
module.exports = dbconnect;