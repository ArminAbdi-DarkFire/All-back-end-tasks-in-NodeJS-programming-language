const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/course").then(() => console.log("DB connected 👍👍👍")).catch((e) => console.log(e.message))

const Schema = mongoose.Schema({
    name: {type: String, required: true, minLength: 3, maxLength: 50},
    tag: [{type: String, enum: ["JS", "node JS"]}],
    teacher: {
        type: String, validate: {
            validator: function (input) {
                return input.startsWith("teacher")
            }, message: "teacher is validate please first start teacher enter on teacher "
        }
    },
    publishDate: {type: Date, default: Date.now},
    completed: {type: Boolean, default: true},
    price: {
        type: Number, required: function () {
            return this.completed
        }
    }
})

const modelCourse = mongoose.model("course", Schema)

const createModelCourse = new modelCourse({
    name: "learning programming JS language",
    tag: ["JS", "node JS"],
    teacher: " Armin Abdi",
    completed: true, // price: 2000000
})

async function saved() {
    try {
        console.log(await createModelCourse.save())
    } catch (e) {
        for (const f in e.errors) {
            console.log(e.errors[f].message)
        }
    }
}

async function findCourse() {
    try {
        const pageSize = 7
        const pageNumber = 1
        console.log(await modelCourse.find({
            price: {
                $gte: 0, $lte: 30000
            }
        }).skip((pageNumber - 1) * pageSize).limit(pageSize).sort({price: 1}))
    } catch (e) {
        console.log(e.message)
    }
}

async function updateCourse(id, name, price) {
    try {
        const updateData = await modelCourse.findByIdAndUpdate(id, {
            $set: {
                name: name, price: price
            }
        })
        console.log(await updateData.save())
    } catch (e) {
        console.log(e.message)
    }
}

async function deleteCourse(id) {
    try {
        console.log(await modelCourse.findByIdAndDelete(id))
    } catch (e) {
        console.log(e.message)
    }
}

//saved()
// findCourse()
// updateCourse("66035f603f3a300865cce874","Armin Abdi","200000000")
// deleteCourse("66035df31d7a27efdf0680c1")
