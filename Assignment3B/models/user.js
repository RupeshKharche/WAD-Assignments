const mongoose = require('mongoose');

// Defining user schema
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	}
}, {timestamp: true});

module.exports = mongoose.model('users', userSchema);