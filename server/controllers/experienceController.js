const Experience = require('../models/Experience');

exports.getExperience = async (req, res) => {
  try {
    const experience = await Experience.find().sort({ startDate: -1 });
    res.json(experience);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

exports.createExperience = async (req, res) => {
  try {
    const newExp = await Experience.create(req.body);
    res.status(201).json(newExp);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

exports.updateExperience = async (req, res) => {
  try {
    const exp = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(exp);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

exports.deleteExperience = async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: 'Experience deleted' });
  } catch (error) { res.status(500).json({ message: error.message }); }
};