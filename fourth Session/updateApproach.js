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

async function updateApproach(id, name, price) {
  const findById = await modelCourse.findById(id);
  if (!findById) return;
  findById.name = name;
  findById.price = price;
  console.log(await findById.save());
}

// updateApproach("65c1b5acc0f43ab0988cfd89", "Amir", 1000000000000);

async function updateApproach(id, name, price) {
  const result = await modelCourse.updateOne(
    { _id: id },
    {
      $set: {
        name: name,
        price: price,
      },
    }
  );
  console.log(result);
}

// updateApproach("65c1b5acc0f43ab0988cfd89", "Javascript", 20000);

async function updateApproach(id, name, price) {
  const result = await modelCourse.findByIdAndUpdate(
    id,
    {
      $set: {
        name: name,
        price: price,
      },
    },
    { new: true } // this option will return the updated document instead of the old one
  );
  console.log(result);
}

updateApproach("65c1b5c802114f04f1bf55cf", "Javascript", 20000);
