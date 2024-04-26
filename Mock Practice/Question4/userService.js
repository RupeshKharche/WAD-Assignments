// Function to add user to localstorage
function addUser(registerForm) {
	let username = registerForm.username.value;
	let email = registerForm.email.value;
	let password = registerForm.password.value;
	
	// Creating user object
	let user = {
		username: username,
		email: email,
		password: password
	};
	
	$.post({
		url: 'https://jsonplaceholder.typicode.com/posts',
		type: "POST",
		contentType: "application/json",
		data: JSON.stringify(user),
		success: function(response) {
			// Redirect the user to the user info page
			window.location.href = 'user-info.html?data=' + JSON.stringify(response);
		},
		error: function(error) {
			console.error(error);
		}
	});
}