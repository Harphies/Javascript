const express = require("express");
require("dotenv/config");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const app = express();

//Middlewares
app.use(express.json());
app.use("/api/user", authRoute);

// Connect to database
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.error(err.message);
  });
app.listen(process.env.PORT, () => console.log("Server is Up and Running"));
