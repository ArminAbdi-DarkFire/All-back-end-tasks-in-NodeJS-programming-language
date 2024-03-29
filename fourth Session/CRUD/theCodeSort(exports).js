const express = require("express");
const mongoose = require("mongoose");
const customerRoutes = require("./routes/usersRoutes");
const pugSinglePage = require("./routes/pugSinglePage");
const middlewareLogger = require("./middleware/logger");
const joi = require("joi");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(middlewareLogger);
app.use(customerRoutes);
app.use(pugSinglePage);
app.set("view engine", "pug");
app.set("views", "./views");

mongoose
  .connect("mongodb://localhost:27017/darkFire")
  .then(() => console.log("db connect"))
  .catch((err) => console.log(err.message)); //{useNewUrlParser:true, useUnifiedTopology:true}

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
  if (err) console.log(err.message);
  else console.log(`listen in port : ${port}`);
});
