const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("Connecting to MongoDB...");

  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB Error:", err);
    throw err;
  }
};

module.exports = connectDB;