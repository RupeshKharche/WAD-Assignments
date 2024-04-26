const express = require('express');
const {getUsers, addUser} = require("./userController");
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/register", addUser);
app.get("/getUsers", getUsers);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});