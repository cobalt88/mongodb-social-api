const User = require('../../models/User');
const Thought = require('../../models/thoughts');
const router = require('express').Router();


/*
================================================
           USER ROUTES | /api/user
================================================
*/


//GET ALL USERS
router.get("/", async (req, res) => {

  try {
    const user = await User.find()
    .populate('thoughts');
    
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
  }
});

//GET USER BY ID
router.get('/:id', async (req, res) => {
  try {

    const user = await User
      .findById(req.params.id)
      .populate('thoughts')
      .populate('friends');

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err.message);

  }
})

//CREATE NEW USER
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
  }
});

// UPDATE USER BY ID
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
  }
})

// DELETE USER BY ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
  }
});



module.exports = router;