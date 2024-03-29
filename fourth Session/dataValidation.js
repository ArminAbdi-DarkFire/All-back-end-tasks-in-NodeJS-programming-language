const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/darkFire")
  .then(() => console.log("db connect"))
  .catch((err) => console.log(err.message)); //{useNewUrlParser:true, useUnifiedTopology:true}

// const courseSchema = new mongoose.Schema({
//   name: { type: String, required: true, minlength: 3, maxlength: 8 },
//   tag: [{ type: String, enum: ["nodejs", "js", "backend", "web"] }],
//   teacher: {
//     type: String,
//     validate: {
//       validator: function (input) {
//         return input.startsWith("teacher");
//       },
//       message:"teacher name must start with ..."
//     },
//   },
//   publishDate: { type: Date, default: Date.now },
//   completed: { type: Boolean, default: false },
//   price: {
//     type: Number,
//     required: function () {
//       return this.completed === true;
//     },
//   },
// });

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 8 },
  tag: [{ type: String, enum: ["nodejs", "js", "backend", "web"] }],
  teacher: {
    type: String,
    validate: {
      validator: function (input) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(input.startsWith("teacher"));
          }, 2000);
        });
      },
      message: "teacher name must start with ...",
    },
  },
  publishDate: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
  price: {
    type: Number,
    required: function () {
      return this.completed === true;
    },
  },
});

const modelCourse = mongoose.model("course", courseSchema);
const newCourse = new modelCourse({
  name: "node Js",
  tag: ["backend", "web"],
  teacher: "Alice",
  completed: true,
  // price: 98000,
});

async function Save() {
  try {
    const result = await newCourse.save();
    console.log("save  data success!", result);
  } catch (error) {
    for (const field in error.errors) {
      console.log(error.errors[field].message);
    }
  }
}

Save();
