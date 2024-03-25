const userModel = require('../models/user.js');

const registerUser = async (req, res) => {
	const {username, email, password} = req.body;

	// Checking if the user already exists
	let userFromDB = await userModel.findOne({ username:username, email: email });

	if(userFromDB) {
		return res.status(409).send({
			message: "Registration failed. User already exists"
		});
	} else {
		// Creating new user
		userFromDB = await new userModel({username, email, password}).save();

		return res.status(200).send({
			body: userFromDB,
			message: "Registration successful"
		});
	}
}

module.exports = {
	registerUser
}