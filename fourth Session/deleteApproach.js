const { object } = require("joi");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/darkFire")
  .then(() => console.log("db connect"))
  .catch((err) => console.log(err.message)); //{useNewUrlParser:true, useUnifiedTopology:true}

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tag: [String],
  teacher: { type: String, required: true },
  publishDate: { type: Date, default: Date.now },
  price: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
});

const modelCourse = mongoose.model("course", courseSchema);
const newCourse = new modelCourse({
  name: "nodeJs",
  tag: ["backend", "web"],
  teacher: "Alice",
  price: 10000,
});

// newCourse
//   .save()
//   .then(() => {
//     console.log("data  saved!");
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

async function save() {
  try {
    const result = await newCourse.save();
    console.log("save  data success!", result);
  } catch (error) {
    console.log(error.message);
  }
}

// save();

async function deleteApproach(id) {
  const result = await modelCourse.findByIdAndDelete(id);
  console.log(result);
}
deleteApproach("65c1b5acc0f43ab0988cfd89");
