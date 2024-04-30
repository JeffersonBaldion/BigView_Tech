const User = require("../Models/user.model.js");
const Cart = require("../Models/cart.model.js")


const getAllUser = async (req, res) => {
    
  try {
        const allUser = await User.find();
        res.status(200).json(allUser);

  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUserById = async (req, res) => {
    const {id} = req.params
  try {
        const userById = await User.findById(id);
        res.status(200).json(userById);

  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUserByEmail = async (req, res) => {
  const {Email, Password} = req.body
try {
      const userByEmail = await User.find({ Email: { $regex: new RegExp(Email, 'i') } });
      console.log(Email, Password)
      if(userByEmail.length !== 0 && userByEmail[0].Password == Password){
        res.status(200).json({isSuccess:true});
      }else{
        res.status(200).json({isSuccess:false})
      }

} catch (error) {
  res.status(400).send(error.message);
}
};

const postUser = async (req, res) => {
    const bodyRes = req.body
  try {
        const newUser = new User(bodyRes)
        await newUser.save()

        const newCart = new Cart({UserId: newUser._id})
        await newCart.save()

        res.status(200).json({user:newUser, cart:newCart});

  } catch (error) {
    res.status(400).send(error.message);
  }
};
const deleteUser = async (req, res) => {
    const {id} = req.params
  try {
        const userDeleted = await User.findByIdAndDelete(id)
        const cartDeleted = await Cart.find({UserId:id})

        res.status(200).json({user:userDeleted, cart:cartDeleted});

  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {

      const updatedUser = await User.findByIdAndUpdate(id, data);
  
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

module.exports = {
  getUserByEmail,
    getAllUser,
    getUserById,
    deleteUser,
    updateUser,
    postUser
}
