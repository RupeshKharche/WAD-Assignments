const express = require("express");

const PORT = 3000;

let app = express();

app.use('/css', express.static(__dirname + "/node_modules/bootstrap/dist/css/"));
app.use('/js', express.static(__dirname + "/node_modules/bootstrap/dist/js/"));
app.use('/public', express.static(__dirname + "/public/"));
app.use('/assets', express.static(__dirname + "/public/assets/"));


app.get("/", (req, res) => {
	res.sendFile("./public/login.html", {root: __dirname});
});

app.get("/login", (req, res) => {
	res.sendFile("./public/login.html", {root: __dirname});
});

app.get("/register", (req, res) => {
	res.sendFile("./public/register.html", {root: __dirname});
});

app.get("/home", (req, res) => {
	res.sendFile("./public/home.html", {root: __dirname});
});


app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});