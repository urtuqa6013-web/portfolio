const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    longDescription: { type: String },
    image: { type: String },
    technologies: [String],
    liveUrl: String,
    githubUrl: String,
    category: { type: String, enum: ['frontend', 'backend', 'fullstack'], default: 'fullstack' },
    featured: { type: Boolean, default: false },
    year: Number,
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);