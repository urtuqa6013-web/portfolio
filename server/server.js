const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Load environment variables
const path = require("path");

dotenv.config({
  path: path.join(__dirname, ".env"),
});
console.log("🚀 Backend Version: Aug 1 CORS Fix");


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
  "http://localhost:5174",
  "https://portfolio-jet-rho-12.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, server-to-server, health checks)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked Origin:", origin);

      // Don't crash the function
      return callback(null, false);
    },
    credentials: true,
  })
);



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

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