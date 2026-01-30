const containerDiv = document.querySelector(".container");
const gridButton = document.querySelector("#grid-size");

// const GRIDNUMBER = 16;
const CONTAINERSIZE = 500;

let gridNumber = 16;
let isDrawingEnabled = false;

function createGrid(gridNumber) {
	// Outer loop (rows)
	for (let i = 0; i < gridNumber; i++) {
		const rows = document.createElement("div"); //Create row divs
		rows.classList = "row";

		// Inner loop(items)
		for (let g = 0; g < gridNumber; g++) {
			const rowTile = document.createElement("div"); //Create tile divs
			rowTile.classList = "tile";

			//Toggle Drawing
			rowTile.addEventListener("dblclick", () => {
				isDrawingEnabled = !isDrawingEnabled;
			});

			//Change on Hover
			rowTile.addEventListener("mouseover", () => {
				if (isDrawingEnabled) {
					rowTile.style.background = getRandomColor();
				}
			});

			rows.appendChild(rowTile); //Insert Child
		}

		containerDiv.appendChild(rows); // Insert Child
	}
}

function deleteGrid() {
	while (containerDiv.firstChild) {
		// loop while there still exist children
		containerDiv.removeChild(containerDiv.firstChild);
	}
}

// Get Random Color
function getRandomColor() {
	const red = Math.floor(Math.random() * 128 + 127);
	const blue = Math.floor(Math.random() * 128 + 127);
	const green = Math.floor(Math.random() * 128 + 127);

	return `rgb(${red}, ${blue}, ${green})`;
}

// Main Program
function main() {
	// Initial Grid
	createGrid(gridNumber);

	//Add button click
	gridButton.addEventListener("click", () => {
		do {
			gridNumber = prompt("Enter Grid Size (Max 100)");
		} while (gridNumber > 100 || isNaN(gridNumber));

		deleteGrid(); // Remove old grid
		createGrid(gridNumber);
	});
}

main();
