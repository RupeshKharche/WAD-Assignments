const express = require("express");
const dotenv = require("dotenv");
const mongoDB = require("./config/db");
const cors = require("cors");
const {insertData, getAllStudents, get20PlusDSBDA, updateStudents} = require("./controller");

dotenv.config();

const app = express();

mongoDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("App started");
});

app.get("/insertData", insertData);
app.get("/getStudents", getAllStudents);
app.get("/get20PlusDSDBA", get20PlusDSBDA);
app.post("/updateStudents", updateStudents);

app.listen(process.env['SERVER_PORT'], () => {
	console.log(`Server started on port ${process.env['SERVER_PORT']}`);
});