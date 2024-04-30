const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    Name:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        unique:true,
        require:true,
    },
    Password:{
        type:String,
        require:true,
    },
    
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
        delete returnedObject.__v;
    },
})

const User = model("User", userSchema)

module.exports = User;