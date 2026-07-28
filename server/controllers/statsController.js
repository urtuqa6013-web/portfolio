const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Contact = require('../models/Contact');

exports.getStats = async (req, res) => {
  try {
    const totalProjects = await Project.countDocuments();
    const totalSkills = await Skill.countDocuments();
    const totalMessages = await Contact.countDocuments();
    const totalViews = await Project.aggregate([
      { $group: { _id: null, total: { $sum: '$views' } } }
    ]);

    res.json({
      projects: totalProjects,
      skills: totalSkills,
      messages: totalMessages,
      views: totalViews[0]?.total || 0,
    });
  } catch (error) { res.status(500).json({ message: error.message }); }
};