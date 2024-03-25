const mongoose = require('mongoose');
const colors = require('colors');

// Connecting to mongodb
const mongoDB = async () => {
	try {
		const conn = await mongoose.connect(process.env["MONGO_URL"]);
		console.log("Successfully connected to database".bgGreen.bgWhite);
	} catch(error) {
		console.log(`Error while connecting to database.\n${error}`.bgRed.bgWhite);
	}
}

module.exports = mongoDB;