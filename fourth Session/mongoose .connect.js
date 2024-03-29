const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/darkFire")
  .then(() => console.log("db connect"))
  .catch((err) => console.log(err.message)); //{useNewUrlParser:true, useUnifiedTopology:true}
