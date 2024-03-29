const express = require("express");
const router = express.Router();

router.get("/api/pug", (req, res) => {
  res.render("welcome", {
    title: "PUG",
    name: "pug single web page",
    message:
      "Lorem ipsum dolor sit, ames consectetur adipisicing elia. Ad Odis at maigres deloris's officiant vitae tempo, succinct quam voluptatibus, vera expediter niue? Dicta painter nam necessitation, earl blandishes cupidities? Placenta.",
  });
});

module.exports = router;
