const express = require("express");
const joi = require("joi");
require("dotenv").config();
const app = express();
app.use(express.json());

var myData = [
  { id: 1, name: "ahmad" },
  { id: 2, name: "mohammad" },
  { id: 3, name: "sara" },
  { id: 4, name: "lala" },
];

app.get("/api/users", (req, res) => { 
  res.send(myData);
});

app.post("/api/users", (req, res) => {
  const schema = joi.object({
    name: joi.string().min(4).max(10).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) res.status(400).send({ message: error.message });

  const newUser = {
    id: myData[myData.length - 1].id + 1,
    name: req.body.name,
  };
  myData.push(newUser);
  res.send(newUser);
});

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
  if (err) console.log(err.message);
  else console.log(`listen in port : ${port}`);
});
