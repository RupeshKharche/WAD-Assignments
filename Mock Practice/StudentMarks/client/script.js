function insertData() {
	$.get({
		url: "http://localhost:3000/insertData",
		success: function(response) {
			console.log(response);
			document.getElementById("response-container").innerHTML = response.responseJSON['message'];
		},
		error: function(response) {
			console.log(response);
			document.getElementById("response-container").innerHTML = response.responseJSON['message'];
		}
	});
}

function getAllStudents() {
	$.get({
		url: "http://localhost:3000/getStudents",
		success: function(response) {
			console.log(response);
			
			const container = document.getElementById("response-container");
			
			let span = document.createElement("span");
			span.innerHTML = "Total students: " + response.count;
			container.append(span);
			
			container.append(document.createElement("br"));

			let columns = ['Name', "Roll_No", "WAD", "DSBDA", "CNS", "CC", "AI"];
			
			let students = response.students;
			let table = document.createElement("table");
			
			table.innerHTML = "<thead><th>Name</th><th>Roll" +
				" No</th><th>WAD</th><th>DSBDA</th><th>CNS</th><th>CC</th><th>AI</th></thead>";
			
			students.forEach((student) => {
				let row = document.createElement("tr");

				for(let column of columns) {
					let cell = document.createElement("td");
					cell.textContent = student[column.toLowerCase()];
					row.appendChild(cell);
				}
				
				table.appendChild(row);
				
				document.getElementById("students-table").appendChild(table);
			});
		},
		error: function(response) {
			console.log(response);
		}
	});
}

function get20PlusDSBDA() {
	$.get({
		url: "http://localhost:3000/get20PlusDSDBA",
		success: function(response) {
			console.log(response);
			
			let students = response.students;
			
			const container = document.getElementById("response-container");
			
			for(let student of students) {
				container.innerHTML += student['name'] + "<br>";
			}
		},
		error: function(response) {
			console.log(response);
		}
	});
}

function updateStudents(updateForm) {
	let studentNames = updateForm.names.value.split(",");
	// console.log(studentNames);
	
	$.post("http://localhost:3000/updateStudents", {students: studentNames},
		function(response) {
			console.log(response);

			let columns = ['Name', "Roll_No", "WAD", "DSBDA", "CNS", "CC", "AI"];

			let students = response.students;
			let table = document.createElement("table");

			table.innerHTML = "<thead><th>Name</th><th>Roll" +
				" No</th><th>WAD</th><th>DSBDA</th><th>CNS</th><th>CC</th><th>AI</th></thead>";

			students.forEach((student) => {
				let row = document.createElement("tr");

				for(let column of columns) {
					let cell = document.createElement("td");
					cell.textContent = student[column.toLowerCase()];
					row.appendChild(cell);
				}

				table.appendChild(row);

				document.getElementById("students-table").appendChild(table);
			});
		},
		function(response) {
			console.log(response);
		}
	);

	// axios.post("http://localhost:3000/updateStudents", {students: studentNames})
	// 	.then((response) => {
	// 			console.log(response);
	//
	// 			let columns = ['Name', "Roll_No", "WAD", "DSBDA", "CNS", "CC", "AI"];
	//
	// 			let students = response.students;
	// 			let table = document.createElement("table");
	//
	// 			table.innerHTML = "<thead><th>Name</th><th>Roll" +
	// 				" No</th><th>WAD</th><th>DSBDA</th><th>CNS</th><th>CC</th><th>AI</th></thead>";
	//
	// 			students.forEach((student) => {
	// 				let row = document.createElement("tr");
	//
	// 				for(let column of columns) {
	// 					let cell = document.createElement("td");
	// 					cell.textContent = student[column.toLowerCase()];
	// 					row.appendChild(cell);
	// 				}
	//
	// 				table.appendChild(row);
	//
	// 				document.getElementById("students-table").appendChild(table);
	// 			});
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});
}