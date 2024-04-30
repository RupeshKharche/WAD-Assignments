const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	roll_no: {
		type: Number,
		required: true,
		unique: true
	},
	wad: {
		type: Number,
		required: true
	},
	dsbda: {
		type: Number,
		required: true
	},
	cns: {
		type: Number,
		required: true
	},
	cc: {
		type: Number,
		required: true
	},
	ai: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model("studentmarks", studentSchema);