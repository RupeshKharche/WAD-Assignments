// Creating an array to store users
let users = [];

// Function to register user
const addUser = async (req, res) => {
	// Getting the user object from the request body
	const user = req.body;
	console.log(user);

	users.push(user);

	res.set({
		"Content-Type": "application/json",
		'Access-Control-Allow-Origin': ['*'],
		'Access-Control-Allow-Methods': 'GET, POST',
		'Access-Control-Allow-Headers': 'Content-Type'
	});

	res.send({
		body: user
	});
};

// Function to get all users
const getUsers = async (req, res) => {
	res.set({
		"Content-Type": "application/json",
		'Access-Control-Allow-Origin': ['*'],
		'Access-Control-Allow-Methods': 'GET, POST',
		'Access-Control-Allow-Headers': 'Content-Type'
	});

	res.send({
		body: JSON.stringify(users)
	});
};

module.exports = {addUser, getUsers};