const User = require('../../models/User');
const Thought = require('../../models/thoughts');
const router = require('express').Router();

//GET ALL USERS
router.get("/", async(req, res) => {
  
  try{
    const user = await User.find();
    console.log(user);
    res.status(200).json(user);
  }catch(err){
    res.status(500).json({message: err.message});
    console.error(err.message);
  }
});

//GET USER BY ID
router.get('/:id', async(req, res) => {
  try {

    const user = await User
      .findById(req.params.id)
      .populate('thoughts')
      .populate('friends');

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({message: err.message});
    console.error(err.message);
    
  }
})

//CREATE NEW USER
router.post("/", async(req, res) => {
  try{
    console.log(req.body);
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,

    });
    res.status(200).json(newUser);
  }catch(err){
    res.status(500).json({message: err.message});
    console.error(err.message);
  }
});

// UPDATE USER BY ID
router.put('/:id', async(req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    
  } catch (err) {
    res.status(500).json({message: err.message});
    console.error(err.message);  }
})



module.exports = router;