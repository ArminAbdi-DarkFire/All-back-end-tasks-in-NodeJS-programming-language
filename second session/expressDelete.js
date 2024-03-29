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

app.delete("/api/users/:id", (req, res) => {
  const userRemove = myData.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );

  if (userRemove === -1) return res.status(404).send("not fund user");

  myData= [
    ...myData.splice(0, userRemove),
    ...myData.splice(userRemove + 1),
  ];
  res.send("removed user ");
});

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
  if (err) console.log(err.message);
  else console.log(`listen in port : ${port}`);
});
