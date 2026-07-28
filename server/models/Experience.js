const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    description: String,
    startDate: Date,
    endDate: Date,
    isCurrentRole: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Experience', experienceSchema);