const mongoose = require('mongoose')

const deletedb=async()=>{
await mongoose.connect("mongodb://localhost:27017/e-com")

const ProductSchema = new mongoose.Schema({
    name:String,
    price: Number,
    brand:String,
    Category:String
})

let Product = await mongoose.model('products',ProductSchema)
let data = await Product.deleteOne({name:'MAX 8'});
console.log(data)
}
deletedb()