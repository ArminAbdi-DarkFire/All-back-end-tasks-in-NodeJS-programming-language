const express = require("express");
const pug = require("pug");

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/api/pug", (req, res) => {
  res.render("welcome", {
    title: "PUG",
    name: "pug single web page",
    message:
      "Lorem, ipsum dolor sit amat consenter adipisicing elia. Ulema, excepted.",
  });
});

app.listen(8080, (err) => {
  if (!err) console.log("Server is running at http://localhost:8080");
  else console.log(`Error ${err}`);
});
