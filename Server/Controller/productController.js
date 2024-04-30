const Product = require("../Models/product.model.js");

const getAllProduct = async (req, res) => {
    const {search} = req.query
  try {
    if (search) {

        const allProducts = await Product.find({name: {$regex: search, $options: 'i'}});
        res.status(200).json(allProducts);

    } else {

      const allProducts = await Product.find();
      res.status(200).json(allProducts);

    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};


module.exports = getAllProduct
