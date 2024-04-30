const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    Name:{
        type:String,
        unique:true,
        require:true,
    },
    Image:{
        type: String,
        require:true
    },
    Price:{
        type:Number,
        require:true,
    },   
});

productSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
        delete returnedObject.__v;
    },
})

const Product = model("Product", productSchema)

module.exports = Product;