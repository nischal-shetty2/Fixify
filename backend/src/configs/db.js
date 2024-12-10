const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

const connect = () => {
  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connect;
