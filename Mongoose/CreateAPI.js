const mongoose = require('mongoose')

const main = async()=>{
    await mongoose.connect("mongodb://localhost:27017/e-com")
    // Schemas are used to validate the fields

    const ProductSchema = new mongoose.Schema({
        name:String,
        price: Number,
        brand:String,
        Category:String
    })

    //Models are used to use schemas to connect node with mongodb

    const ProductModel = mongoose.model('products',ProductSchema);
    let data = new ProductModel({name:"m11",price:1000,brand:'xyz',Category:"Mobile"});
    let result = await data.save();
    console.log(result)
}

main()