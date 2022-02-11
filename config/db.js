const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "resumebuild-database",
  });
  console.log("Connection OK MongoDB");
};

module.exports = connectDB;
