// Function to display user data
function displayData(users) {
	let container = document.getElementById("user-info-container");

	users.forEach((user) => {
		// user = JSON.parse(user);

		let userDiv = document.createElement("div");
		userDiv.innerHTML += `<p>Username: ${user.username}</p>`;
		userDiv.innerHTML += `<p>Email: ${user.email}</p>`;
		userDiv.innerHTML += `<p>Password: ${user.password}</p>`;

		container.append(userDiv);
		container.append(document.createElement("br"));
	});
}