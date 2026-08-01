const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  try {
    if (isConnected) {
      return;
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    isConnected = conn.connections[0].readyState === 1;

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw error;
  }
};

module.exports = connectDB;