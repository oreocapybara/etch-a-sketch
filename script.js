const containerDiv = document.querySelector(".container");

// const GRIDNUMBER = 16;
const CONTAINERSIZE = 500;

let gridNumber = 16

function createGrid(gridNumber) {
	// Make a grid based on the number
	for (let i = 0; i < GRIDNUMBER; i++) {
		const rows = document.createElement("div"); //Create row divs
		rows.classList = "row";

		for (let g = 0; g < GRIDNUMBER; g++) {
			const rowTile = document.createElement("div"); //Create tile divs
			rowTile.classList = "tile";
			rows.appendChild(rowTile); //Insert Child
		}

		containerDiv.appendChild(rows); // Insert Child
	}
}

