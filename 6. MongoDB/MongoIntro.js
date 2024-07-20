//connecting one database (JUST AN INTRO, IT IS A TIME CONSUMING METHOD)

const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient     //Another Method to use MongoDb
const database='e-com'
const url = 'mongodb://localhost:27017'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    let db= result.db(database);
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData()