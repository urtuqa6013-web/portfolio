const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

// Load environment variables
dotenv.config({
  path: path.join(__dirname, ".env"),
});

// Database
dotenv.config();

const connectDB = require("./config/db");

// Routes
const projectRoutes = require("./routes/projectRoutes");
const skillRoutes = require("./routes/skillRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const contactRoutes = require("./routes/contactRoutes");
const statsRoutes = require("./controllers/statsController");

const app = express();

connectDB();

// Connect database for every serverless invocation
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Database connection failed",
    });
  }
});

// CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolio-tau-indol-v9t6citybp.vercel.app",
  "https://portfolio-38dp49ouz-urwa.vercel.app", // Yeh URL console error se liya hai
  "https://portfolio-fb5z.vercel.app" // Aapka main frontend domain (jo Vercel par Assigned hai)
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked Origin:", origin);
      return callback(null, false);
    },
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/contact", contactRoutes);
app.get("/api/stats", statsRoutes.getStats);

// Home
app.get("/", (req, res) => {
  res.json({
    message: "Portfolio Backend API",
    status: "Running",
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: err.message,
  });
});

// Local development only
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5001;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;