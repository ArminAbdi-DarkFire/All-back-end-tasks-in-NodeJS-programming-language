const express = require("express");
const Joi = require("joi");
const cors = require("cors");
const config = require("config");
const methodCRUD = require("./routes/methodCRUD");
require("dotenv").config();
const pug=require ("pug")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.use(methodCRUD);

app.set("view engine","pug")
app.set("views","./views")

console.log(config.get("databaseAddress"));


app.get("/api/pug",(req,res)=>{
  res.render("index",{title:"PUG", name:"Armin Abdi vere good 👌👌👌👌"})
})


const port = process.env.PORT || 8080;
app.listen(port, (e) => {
  if (e) console.log(e);
  else console.log(`listen on port ${port}`);
});
