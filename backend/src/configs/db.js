const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

const connect = () => {
  console.log("\n\n\n\n" + process.env.MONGODB_URI);
  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connect;
