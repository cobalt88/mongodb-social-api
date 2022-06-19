const User = require('../../models/User');
const Thought = require('../../models/thoughts');
const router = require('express').Router();

/*
==================================================
         THOUGHT ROUTES | /api/thoughts
==================================================
*/

//GET ALL THOUGHTS
router.get("/", async(req, res) => {
  try {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
  }
});

// CREATE NEW THOUGHT
router.post("/", async(req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    const thoughtId = newThought._id;
    const userId = req.body.userId;
    const user = await User.findOneAndUpdate(
      {_id: userId},
      { $push: 
        { 
          thoughts: thoughtId
        } 
      },
    );
    res.status(200).json(newThought);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
  }
});

// CREATE NEW REACTION TO A POST
router.post('/:thoughtId/reactions', async(req,res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    const reaction = await Reaction.create(req.body);
    const userId = req.body.userId;
    const user = await User.findOneAndUpdate(
      {_id: userId},
      { $push:
        {
          reactions: reaction
        }
      },
    );
    res.status(200).json(thought);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
  }
});

// UPDATE THOUGHT BY ID
router.put('/:id', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(thought);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
  }
});

// DELETE THOUGHT BY ID
router.delete('/:id', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id);
    res.status(200).json(thought);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
  }
});



module.exports = router;