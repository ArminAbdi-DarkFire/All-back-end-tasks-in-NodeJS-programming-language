const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/hope").then(() => console.log("DB connected")).catch((e) => console.log(e))

const Schema = mongoose.Schema({
	name: {type: String, minLength: 3, maxLength: 50, required: true},
	tag: [{type: String, enum: ["js", "node js"]}],
	teacher: {
		type: String, validate: {
			validator: function (input) {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve(input.startsWith("teacher"))
					}, 0)
				})
			}, message: "teacher is validate please first start teacher enter on teacher "
		}
	},
	completed: {type: Boolean, default: true},
	price: {
		type: Number, required: function () {
			return this.completed
		}
	}
})

const HopeModel = mongoose.model("hope", Schema)

const createHope = new HopeModel({
	name: "node Js Api", tag: "jsx", teacher: "Sara", completed: true, price: 200000000
})

async function savedData() {
	try {
		console.log(await createHope.save())
	} catch (e) {
		for (const field in e.errors) {
			console.log(e.errors[field].message)
		}
	}
}

async function findHopeData() {
	try {
		const pageSize = 10
		const pageNumber = 2
		console.log(await HopeModel.find().or([{name: "Armin"}, {price: {$lte: 3000}}]).sort({name: 1}).select({
			name: 1, _id: 1, price: 1
		}).skip((pageNumber - 1) * pageSize).limit(pageSize))
		
	} catch (e) {
		console.log(e)
	}
	
}

async function updateHopeData(id, name, price) {
	try {
		const Update = await HopeModel.findByIdAndUpdate(id, {
			$set: {
				name: name, price: price
			}
		})
		console.log(await Update.save())
		
		
	} catch (e) {
		console.log(e)
	}
}

async function deleteHopeData(id) {
	try {
		const Update = await HopeModel.findByIdAndDelete(id)
		console.log(Update)
	} catch (e) {
		console.log(e)
	}
}

savedData()
// findHopeData()
// updateHopeData("660343e97c5004e43b57e22a", "Sara", "60000")
// deleteHopeData("66034412740be8bcaeb59674")