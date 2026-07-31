const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);

    // Don't exit on Vercel
    if (process.env.NODE_ENV !== "production") {
      process.exit(1);
    }

    throw err;
  }
};

module.exports = connectDB;