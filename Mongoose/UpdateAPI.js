const mongoose = require('mongoose')

    const updateindb=async()=>{
    await mongoose.connect("mongodb://localhost:27017/e-com")

    const ProductSchema = new mongoose.Schema({
        name:String,
        price: Number,
        brand:String,
        Category:String
    })
    
    const Product = mongoose.model('products',ProductSchema);
    let data = await Product.updateOne(
        {name:"m10"},
        {
            $set:{price:750, name:'MAX 8'}
        }
)
console.log(data)
}
updateindb()