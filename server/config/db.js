const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const con = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DATABSE CONNECTED!");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
