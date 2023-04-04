const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./router/user");
const connectDb = require("./db/connectDB");

dotenv.config();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use("/api/users", userRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server Started on Port ${process.env.PORT}`)
);
