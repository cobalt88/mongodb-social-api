const User = require('../../models/User');
const Thought = require('../../models/thoughts');
const router = require('express').Router();

// CREATE NEW REACTION
router.post('/:id', async(req, res) => {
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
router.delete('/:thoughtId', async(req, res) => {
  
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
