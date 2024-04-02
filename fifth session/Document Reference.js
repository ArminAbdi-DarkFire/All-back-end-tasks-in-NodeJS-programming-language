const mongoose = require("mongoose")


mongoose
    .connect("mongodb://localhost:27017/DarkFireCompany")
    .then(() => {
        console.log("DB connected 👍👍👍")
    })
    .catch((e) => {
        console.log(e.message)
    })


const teacherModel = mongoose.model('teacher', new mongoose.Schema({
    name: {type: String, min: 3, max: 8, required: true}, bio: String, website: String
}))


const courseModel = mongoose.model('course', new mongoose.Schema({
    name: {type: String, min: 3, max: 8, required: true},
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: "teacher"},

}))

async function createTeacher(name, bio, website) {
    try {
        const teacher = new teacherModel({
            name, bio, website
        })
        console.log(await teacher.save())
    } catch (e) {
        console.log(e.message)
    }
}

async function createCourse(name, teacher) {
    try {
        const course = new courseModel({
            name, teacher
        })
        console.log(await course.save())
    } catch (e) {
        console.log(e.message)
    }
}

async function listCourses() {
    try {
        console.log(await courseModel.find().populate("teacher", "-_id -__v").select({name: 1, teacher: 1, _id: 0}))
    } catch (e) {
        console.log(e.message)
    }
}

// createTeacher("Armin", "Dark Fire", "DarkFireCompany.com")
// createCourse("node js", "660c95f3e707e89c36a5658c")
listCourses()
