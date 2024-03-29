const express = require("express");
require("dotenv").config();

const app = express();

var myData = [
  { id: 1, name: "ahmad" },
  { id: 2, name: "mohammad" },
  { id: 3, name: "sara" },
  { id: 4, name: "lala" },
];

app.get("/api/users", (req, res) => {
  res.send(myData);
});

app.get("/api/users/:id", (req, res) => {
  const findUser = myData.find((item) => item.id === parseInt(req.params.id));
  if (!findUser) res.send("not Find User ☹☹☹");
  else res.send(findUser);
});

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
  if (err) console.log(err.message);
  else console.log(`listen in port : ${port}`);
});
