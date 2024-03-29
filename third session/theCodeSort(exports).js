const express = require("express");
const customerRoutes = require("./routes/customerRoutes");
const pugSinglePage = require("./routes/pugSinglePage");
const middlewareLogger=require("./middleware/logger")
const configFile = require("config");
const joi = require("joi");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
var debug = require("debug")("startup");
var debugConfiguration = require("debug")("app : configuration");
var debugDB = require("debug")("app : Db");

const app = express();

app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(middlewareLogger)
app.use(customerRoutes);
app.use(pugSinglePage);

app.set("view engine", "pug");
app.set("views", "./views");

debug("hello");
debugConfiguration("some Configuration");
debugDB("db initialized");

console.log(configFile.get("databaseAddress"));



const port = 8080;
app.listen(port, (err) => {
  if (err) console.log(err.message);
  else console.log(`listen in port : ${port}`);
});
