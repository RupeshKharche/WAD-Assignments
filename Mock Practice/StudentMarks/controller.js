const studentSchema = require("./models/student");

const insertData = async (req, res) => {
	console.log("Received request for inserting data");

	const data = [
		{
			name: "Parth",
			roll_no: 1,
			wad: 40,
			dsbda: 45,
			cns: 50,
			cc: 55,
			ai: 60
		},
		{
			name: "Sahil",
			roll_no: 2,
			wad: 80,
			dsbda: 87,
			cns: 90,
			cc: 89,
			ai: 82
		},
		{
			name: "Ram",
			roll_no: 3,
			wad: 67,
			dsbda: 66,
			cns: 87,
			cc: 80,
			ai: 60
		},
		{
			name: "Rupesh",
			roll_no: 4,
			wad: 78,
			dsbda: 80,
			cns: 89,
			cc: 60,
			ai: 79
		},
		{
			name: "Shreya",
			roll_no: 5,
			wad: 79,
			dsbda: 80,
			cns: 55,
			cc: 89,
			ai: 67
		}
	];

	//res.set("Content-Type", "application/json");

	try {
		await studentSchema.insertMany(data);
		res.status(201).send({message: "Data inserted successfully"});
	} catch(error) {
		res.status(500).send({message: "Failed to insert data"});
	}
};

const getAllStudents = async (req, res) => {
	console.log("Received request for getting students having 20+ marks in DSBDA");

	//res.set("Content-Type", "application/json");

	const count = await studentSchema.countDocuments({});
	const students = await studentSchema.find({});

	res.send({
		count: count,
		students: students
	});
};

const get20PlusDSBDA = async (req, res) => {
	console.log("Received request for getting all docs");

	//res.set("Content-Type", "application/json");

	const students = await studentSchema.find({dsbda:{$gt: 20}});

	res.send({
		students: students
	});
};

const updateStudents = async (req, res) => {
	console.log("Received request for updating marks of students by 10");

	// console.log(req);

	const studentNames = req.body.students;
	console.log(studentNames);

	//res.set("Content-Type", "application/json");

	// await studentSchema.updateOne(
	// 	{
	// 		'name': {$in: studentNames}
	// 	},
	// 	{
	// 		$inc: {
	// 			wad: 10,
	// 			dsbda: 10,
	// 			cns: 10,
	// 			cc: 10,
	// 			ai: 10,
	// 		}
	// 	}
	// );
	//
	// const updatedStudents = await studentSchema.find({name : {$in: studentNames}});
	//
	// res.send({
	// 	students: updatedStudents
	// });
};

module.exports = {insertData, getAllStudents, get20PlusDSBDA, updateStudents};