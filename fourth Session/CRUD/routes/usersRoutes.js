const express = require("express");

const modelUser = require("../models/usersModel");
const {
  validatorCreateUser,
  validatorUpdateUser,
} = require("../validators/userValidator");

const router = express.Router();

router.get("/api/users", async (req, res) => {
  const allUsers = await modelUser.find();
  res.status(200).send(allUsers);
});

router.get("/api/users/:id", async (req, res) => {
  const mongoose = require("mongoose");
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).send({ message: "bad Id" });

  const findUser = await modelUser.findById(req.params.id);

  if (!findUser) {
    res.status(404).send({ message: "user not found" });
  } else {
    res.status(200).send(findUser);
  }
});

router.post("/api/users", async (req, res) => {
  const { error } = validatorCreateUser(req.body);

  if (error) res.status(400).send({ message: error.message });

  const newUser = new modelUser({
    name: req.body.name,
  });

  const result = await newUser.save();
  res.status(200).send(result);
});

router.put("/api/users/:id", async (req, res) => {
  const { error } = validatorUpdateUser({
    ...req.body,
    id: req.params.id,
  });

  if (error) res.status(400).send({ message: error.message });

  const findIdUser = await modelUser.findById(req.params.id);
  if (!findIdUser) return res.send(404).send({ message: "user not found" });
  findIdUser.name = req.body.name;
  const result = await findIdUser.save();
  res.status(200).send(result);
});

router.delete("/api/users/:id", async (req, res) => {
  const removeUser = await modelUser.findByIdAndDelete(req.params.id);
  res.send("removed User : " + removeUser);
});

module.exports = router;
