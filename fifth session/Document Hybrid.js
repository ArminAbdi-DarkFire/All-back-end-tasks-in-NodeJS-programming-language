const mongoose = require("mongoose")

mongoose
    .connect("mongodb://localhost:27017/DarkFireCompany")
    .then(() => {
        console.log("DB connected 👍👍👍")
    })
    .catch((e) => {
        console.log(e.message)
    })
