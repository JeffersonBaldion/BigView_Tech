const Product = require("./Models/product.model.js");
const axios = require("axios")
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/config.js");
const productRouter = require("./Router/productRouter");
const userRouter = require("./Router/userRouter.js");
const cartRouter = require("./Router/cartRouter.js");
const { bulkSave } = require("./Models/user.model.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);

app.use(express.static("uploads"));

connectDB();

app.listen(3000, async () => {
  
    console.log("Server is running on Port 3000");

});
