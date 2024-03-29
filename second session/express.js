const express = require("express");

const app = express();

app.get("/api/users", (req, res) => {
  res.send("Hello User, welcome to the website");
});

const port = 8080;
app.listen(port, (err) => {
  if (err) console.log(err.message);
  else console.log(`listen in port : ${port}`);
});
