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
	
	$.ajax({
		url: 'http://localhost:3000/register',
		type: "POST",
		contentType: "application/json",
		data: JSON.stringify(user),
		success: function(response) {
			// Redirect the user to the user info page
			window.location.href = 'user-info.html';
		},
		error: function(error) {
			console.error(error);
		}
	});
}