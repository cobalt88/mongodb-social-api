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

//GET THOUGHT BY ID
router.get('/:id', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    res.status(200).json(thought);
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
    await User.findOneAndUpdate(
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


// CREATE NEW REACTION
router.post('/:id/reaction', async(req, res) => {
  try {
    const thoughtId = req.params.id;
    const newReaction = await Thought.findOneAndUpdate(
      {_id: thoughtId},
      { $push: 
        { 
          reactions: req.body
        } 
      },
    );
    res.status(200).json(newReaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
  }
});

//DELETE REACTION
router.delete('/reaction/:thoughtId', async(req, res) => {
  
  try {
    console.log(`made it here`)
    const thoughtId = req.params.thoughtId;
    const reactionId = req.body.reactionId;
    await Thought.findOneAndUpdate(
      { _id: thoughtId },
      { $pull: 
        { reactions: 
          { _id: reactionId } 
        } 
      },
      { new: true }
    );
    res.status(200).json({message: "Reaction deleted"});
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
  }
});


module.exports = router;