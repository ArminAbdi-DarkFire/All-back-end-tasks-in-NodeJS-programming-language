const express = require("express");
const Joi = require("joi");
const { model } = require("mongoose");



const route = express.Router();

var allUsers = [
  { id: 1, name: "Sara" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Alisa" },
];

route.get("/api/users", (req, res) => {
  res.send(allUsers);
});

route.get("/api/users/:id", (req, res) => {
  const findUser = allUsers.find((item) => item.id === parseInt(req.params.id));
  if (findUser === undefined) return res.status(400).send("not found ....");
  res.status(200).send(findUser);
});

route.post("/api/users", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(8).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(404).send(error.message);

  const createUser = {
    id: allUsers[allUsers.length - 1].id + 1,
    name: req.body.name,
  };
  allUsers.push(createUser);
  res.status(200).send(createUser);
});

route.put("/api/users/:id", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(8).required(),
    id: Joi.number().required(),
  });
  const { error } = schema.validate({ ...req.body, id: req.params.id });
  if (error) return res.status(404).send(error.message);

  const findUser = allUsers.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );
  if (findUser === undefined) return res.status(400).send("not found ....");

  allUsers[findUser].name = req.body.name;
  res.status(200).send(allUsers[findUser]);
});

route.delete("/api/users/:id", (req, res) => {
  const findUser = allUsers.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );
  if (findUser === -1) return res.status(400).send("not found ....");

  allUsers = [
    ...allUsers.splice(0, findUser),
    ...allUsers.splice(findUser + 1),
  ];

  res.status(200).send("removed user ");
});

module.exports=route
