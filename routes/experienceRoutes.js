const express = require('express');
const router = express.Router();
const Experience = require('../models/experience');

// hämta alla arbetserfarenheter
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// hämta en specifik arbetserfarenhet via id
router.get('/:id', async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ error: 'arbetserfarenhet hittades inte' });
    }
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// skapa en ny arbetserfarenhet
router.post('/', async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// uppdatera en arbetserfarenhet
router.put('/:id', async (req, res) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedExperience) {
      return res.status(404).json({ error: 'arbetserfarenhet hittades inte' });
    }
    res.json(updatedExperience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// radera en arbetserfarenhet
router.delete('/:id', async (req, res) => {
  try {
    const deletedExperience = await Experience.findByIdAndDelete(req.params.id);
    if (!deletedExperience) {
      return res.status(404).json({ error: 'arbetserfarenhet hittades inte' });
    }
    res.json({ message: 'arbetserfarenhet raderad' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
