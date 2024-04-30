const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.connect("mongodb+srv://jeffersonbaldionb:NAcX5Di8iiIQc5SF@database.uuuuz9z.mongodb.net/");
        console.log("MongoDB Connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB