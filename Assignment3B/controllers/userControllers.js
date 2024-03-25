const userModel = require('../models/user.js');

// Get user by id
const getUserById = async (req, res) => {
	try {
		const id = req.params["id"];
		console.log(`User id [${id}]`);

		const user = await userModel.findOne({ _id: id });

		if(user) {
			return res.status(200).send({
				body: user
			});
		} else {
			return res.status(500).send({
				body: "",
				message: `User does not exist [id=${id}]`
			});
		}
	} catch(error) {
		console.log(error);
		return res.status(500).send({
			body: "",
			message: `Error in fetching user \n${error}`
		});
	}
}

const createUser = async (req, res) => {
	try {
		const {username, email, password} = req.body;
		console.log(`User [username=${username}, email=${email}, password=${password}]`);

		const userFromDB = await userModel.findOne({ email: email });

		if(userFromDB) {
			return res.status(500).send({
				message: "User already exists"
			});
		} else {
			const user = await new userModel({
				username, email, password
			}).save();

			return res.status(201).send({
				body: user,
				message: `User created successfully`
			});
		}
	} catch(error) {
		console.log(error);
		return res.status(500).send({
			body: "",
			message: `Error in fetching user. ${error}`
		});
	}
}

const updateUser = async (req, res) => {
	try {
		const id = req.params['id'];
		const {username, email, password} = req.body;
		console.log(`User [username=${username}, email=${email}, password=${password}]`);

		await userModel.findByIdAndUpdate(id, { username: username, email: email, password: password });

		const updatedUser = await userModel.findOne({_id: id});

		if(updatedUser) {
			return res.status(200).send({
				body: updatedUser,
				message: `User updated successfully`
			});
		} else {
			return res.status(500).send({
				body: "",
				message: `User does not exist`
			});
		}
	} catch(error) {
		console.log(error);
		return res.status(500).send({
			body: "",
			message: `Error in updating user. ${error}`
		});
	}
}

const deleteUser = async (req, res) => {
	try {
		const id = req.params['id'];

		await userModel.findByIdAndDelete(id);

		// Verifying that the user got deleted
		const user = await userModel.findById(id);

		if(!user) {
			return res.status(200).send({
				body: "",
				message: `User deleted successfully`
			});
		} else {
			return res.status(500).send({
				body: "",
				message: `Error in deleting user`
			});
		}
	} catch(error) {
		console.log(error);
		return res.status(500).send({
			body: "",
			message: `Error in deleting user. ${error}`
		});
	}
}

module.exports = {
	getUserById,
	createUser,
	updateUser,
	deleteUser
}