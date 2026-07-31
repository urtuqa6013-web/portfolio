const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Load environment variables
dotenv.config();

// Route Imports
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const contactRoutes = require('./routes/contactRoutes');
const statsRoutes = require('./controllers/statsController'); // Direct import for stats

// Config Imports
const connectDB = require('./config/db');

// Initialize App
const app = express();

// ============ MIDDLEWARE ============
const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolio-urwa.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ============ DATABASE ============
connectDB();

// ============ ROUTES ============
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/contact', contactRoutes);
app.get('/api/stats', statsRoutes.getStats); // Simple stat route

// Health Check
app.get("/", (req, res) => {
  res.json({
    message: "Portfolio Backend API",
    status: "Running"
  });
});

// ============ ERROR HANDLING ============
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ message: 'Server error', error: error.message });
});

// ============ START SERVER ============
const PORT = process.env.PORT || 5001;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;