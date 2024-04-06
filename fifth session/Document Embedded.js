const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/DarkFireCompany").then(() => {
    console.log("DB connected 👍👍👍")
}).catch((e) => {
    console.log(e.message)
})

const schemaComment = new mongoose.Schema({text: String, sender: String})
const modelComment = mongoose.model("comment", schemaComment)

const modelCourse = mongoose.model("course", new mongoose.Schema({name: String, comment: schemaComment}))

async function createCourse(name, comment) {
    try {
        const newCourse = await new modelCourse({name, comment}).save()
        console.log(newCourse)
    } catch (e) {
        console.log(e.message)
    }
}

async function updateComment(courseId, text) {
    try {
        const newCourse = await modelCourse.findByIdAndUpdate({_id: courseId}, {
            $set: {
                "comment.text": text
            }
        }, {new: true})

        console.log(newCourse)
    } catch (e) {
        console.log(e.message)
    }
}


// createCourse("nodeJS course", new modelComment({text: "good", sender: "Ali"}))

updateComment("66107901fe46f620d4982d30", "very good")