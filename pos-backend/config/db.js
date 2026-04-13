const mongoose = require('mongoose');
const path = require('path');
// .env file ka exact path dhundne ke liye
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); 

const connectDB = async () => {
  try {
    const connString = process.env.MONGO_URI;
    
    if (!connString) {
      console.log("❌ Error: MONGO_URI nahi mil rahi!");
      console.log("Check karein ki .env file 'pos-backend' folder ke andar hi hai.");
      process.exit(1);
    }

    await mongoose.connect(connString);
    console.log("✅ MongoDB Connected...");
  } catch (err) {
    console.error("❌ Connection Error: " + err.message);
    process.exit(1);
  }
};

module.exports = connectDB;