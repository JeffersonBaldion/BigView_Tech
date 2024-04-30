const Cart = require("../Models/cart.model.js")


const getCartById = async (req, res) => {
    const {id} = req.params
  try {
        const cartById = await Cart.find({UserId:id});
        res.status(200).json(cartById);

  } catch (error) {
    res.status(400).send(error.message);
  }
};


const updateCart = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const cartById = await Cart.find({UserId:id});
      const updatedUser = await Cart.findByIdAndUpdate(cartById._id, data);
  
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

module.exports = {
    getCartById,
    updateCart
}
