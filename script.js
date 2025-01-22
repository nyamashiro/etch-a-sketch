const gridContainer = document.querySelector(".grid-container");

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

createGrid(25);