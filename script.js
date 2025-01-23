const gridContainer = document.querySelector(".grid-container");
const gridSizeButton = document.querySelector(".grid-size");
let mousedown = false;

function createGrid(size) {

  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j < size; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      column.appendChild(row);
    }
    gridContainer.appendChild(column);
  }
}

function generateRandomColor() {
  return Math.floor(Math.random() * 256)
}

function deleteGrid() {
  let child = gridContainer.lastElementChild;

  while (child) {
    gridContainer.removeChild(child);
    child = gridContainer.lastElementChild;
  }
}

gridSizeButton.addEventListener("click", () => {
  let newSize = parseInt(prompt("What would you like to change the size of the grid to? (Max: 100)"))

  while (newSize <= 0 || newSize > 100 || newSize === "" || isNaN(newSize)) {
    newSize = prompt("Please enter a number between 1 and 100");
  }
  deleteGrid();
  createGrid(newSize)
})

window.addEventListener("mousedown", (e) => {
  mousedown = true;
  e.preventDefault();
  if (e.target.classList.contains("row")) {
    e.target.style.backgroundColor = "rgb(" + generateRandomColor() + "," + generateRandomColor() + "," + generateRandomColor() + ")";
  }
})

gridContainer.addEventListener("mouseover", (e) => {
  if (mousedown && e.target.classList.contains("row")) {
    e.target.style.backgroundColor = "rgb(" + generateRandomColor() + "," + generateRandomColor() + "," + generateRandomColor() + ")";
  }
})

window.addEventListener("mouseup", () => {
  mousedown = false;
})

createGrid(16)