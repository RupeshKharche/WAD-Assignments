const userModel = require('../models/user.js');

const login = async (req, res) => {
	const {username, password} = req.body;

	// Verifying the user
	const userFromDB = await userModel.findOne({ username: username });

	if(userFromDB) {
		return res.status(200).send({
			body: userFromDB,
			message: "Login successful"
		});
	} else {
		return res.status(401).send({
			message: "Login failed. Invalid username or password"
		});
	}
}

module.exports = {
	login
}