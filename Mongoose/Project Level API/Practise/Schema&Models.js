const mongoose = require('mongoose')

const ProductInfoSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    Category:String
})

module.exports= mongoose.model('products',ProductInfoSchema)