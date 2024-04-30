const {Schema, model} = require('mongoose')

const cartSchema = new Schema({
    Product:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    UserId:{
        type: String,
        require: true
    }
});

cartSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
        delete returnedObject.__v;
    },
})

const Cart = model("Cart", cartSchema)

module.exports = Cart;