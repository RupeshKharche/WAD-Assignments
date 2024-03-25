const express = require('express');
const colors = require('colors');
const mongoDB = require('./config/db.js');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes.js');
const loginRoute = require('./routes/loginRoute.js');
const registerRoute = require('./routes/registerRoute.js');

dotenv.config();

mongoDB();

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoute);
app.use("/register", registerRoute);

app.get("/", (req, res) => {
	res.send("<h1>Welcome to app</h1>");
});

const PORT = process.env["PORT"] || "8080";

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`.bgCyan.white);
});