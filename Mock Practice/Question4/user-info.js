const urlParams = new URLSearchParams(window.location.search);
let data = urlParams.get("data");

data = JSON.parse(data);

console.log(data);

document.getElementById("username").innerHTML += `Username: ${data.username}`;
document.getElementById("email").innerHTML += `Email: ${data.email}`;
document.getElementById("password").innerHTML += `Password: ${data.password}`;