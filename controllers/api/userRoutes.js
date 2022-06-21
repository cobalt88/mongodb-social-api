const User = require('../../models/User');
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
    .populate('thoughts')
    .populate('friends');

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

//GIVE USER NEW FRIEND
router.post('/:userId/friends/:friendId', async(req,res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friend = await User.findById(req.params.friendId);
    user.friends.push(friend);
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
  }
});

// DELETE USER FRIEND
router.delete('/:userId/friends/:friendId', async(req,res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friend = await User.findById(req.params.friendId);
    user.friends.pull(friend);
    await user.save();
    res.status(200).json(user);
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