const mongoose = require('mongoose')

const FindAPI=async()=>{
    await mongoose.connect("mongodb://localhost:27017/e-com")
const ProductSchema = new mongoose.Schema(
    {    name:String,
    price: Number,
    brand:String,
    Category:String
})

let Product = await mongoose.model('products', ProductSchema)
let data = await Product.find()
console.log(data)
}
FindAPI()