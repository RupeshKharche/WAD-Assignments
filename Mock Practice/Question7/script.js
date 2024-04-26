// Function to create a table based on the number of rows and columns
function createTable(input, tableNum) {
	// Extracting rows, columns and input value from the input
	let inputArray = input.split("#").map(Number);

	let rows = inputArray[0];
	let columns = inputArray[1];
	let val = inputArray[2];

	let table = `<table id='table${tableNum}'>`;

	for(let i = 0; i < rows; i++) {
		table += "<tr>";
		for(let j = 0; j < columns; j++) {
			table += `<td>${val}</td>`;

			// Taking the value from the user
			val = prompt(`Enter value ${(j + 1) + (rows * i)}`);
		}
		table += "</tr>";
	}

	// Adding the table to the div
	document.getElementById(`table${tableNum}-container`).innerHTML = table;
}

function calcTable() {
	// Getting table 1 and 2
	let table1 = document.getElementById("table1");
	let table2 = document.getElementById("table2");
	
	let table3 = "<table>";
	
	// Iterating the rows and columns of the tables
	for (let row = 0; row < table1.rows.length; row++) {
		table3 += "<tr>";

		// Check if the current row has the same number of cells in both tables
		if (table1.rows[row].cells.length !== table2.rows[row].cells.length) {
			console.error("Error: Row", row + 1, "has different cell count in tables");
			return; // Exit if cell count mismatch
		}

		// Iterate through columns in the current row
		for (let col = 0; col < table1.rows[row].cells.length; col++) {
			const cell1Value = table1.rows[row].cells[col].innerText;
			const cell2Value = table2.rows[row].cells[col].innerText;

			if (cell1Value === cell2Value) {
				table3 += `<td style="background-color: lightblue;">${cell1Value}</td>`;
			} else {
				table3 += `<td style="background-color: lightcoral;">${cell1Value * cell2Value}</td>`;
			}
		}
		table3 += "</tr>";
	}
	
	document.getElementById("table3-container").innerHTML = table3;
}