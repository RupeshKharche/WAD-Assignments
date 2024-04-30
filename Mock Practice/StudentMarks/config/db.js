const mongoose = require('mongoose');

const mongoDB = async () => {
	const conn = await mongoose.connect(process.env['MONGO_URL']);
	console.log("Connected to database");
};

module.exports = mongoDB;