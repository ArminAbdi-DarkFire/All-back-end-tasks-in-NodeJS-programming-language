const express = require("express");
const router = express.Router();

var myData = [
  { id: 1, name: "ahmad" },
  { id: 2, name: "mohammad" },
  { id: 3, name: "sara" },
  { id: 4, name: "lala" },
];

router.get("/api/users", (req, res) => {
  res.send(myData);
});

router.get("/api/users/:id", (req, res) => {
  const findUser = myData.find((item) => item.id === parseInt(req.params.id));
  if (!findUser) res.send("not Find User ☹☹☹");
  else res.send(findUser);
});

router.post("/api/users", (req, res) => {
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

router.put("/api/users/:id", (req, res) => {
  const schema = joi.object({
    name: joi.string().min(4).max(10).required(),
    id: joi.number().required(),
  });

  const { error } = schema.validate({ ...req.body, id: req.params.id });

  if (error) res.status(400).send({ message: error.message });

  const userUpdate = myData.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );

  if (userUpdate === -1) return res.status(404).send("not fund user");
  myData[userUpdate].name = req.body.name;
  res.send(myData[userUpdate]);
});

router.delete("/api/users/:id", (req, res) => {
  const userRemove = myData.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );

  if (userRemove === -1) return res.status(404).send("not fund user");

  const removed = [
    ...myData.splice(0, userRemove),
    ...myData.splice(userRemove + 1),
  ];
  res.send("removed user ");
});

module.exports = router;
