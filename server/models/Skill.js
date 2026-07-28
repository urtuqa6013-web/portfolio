const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category: { type: String, enum: ['frontend', 'backend', 'tools', 'database'] },
    proficiency: { type: Number, min: 0, max: 100, default: 50 },
    icon: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Skill', skillSchema);