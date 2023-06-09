/* eslint-disable func-names */
/* eslint-disable no-console */
const mongoose = require("mongoose");
require("dotenv").config({});

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected successfully"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
