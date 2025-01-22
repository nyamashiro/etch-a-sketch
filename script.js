const gridContainer = document.querySelector(".grid-container");
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

gridContainer.addEventListener("mousedown", (e) => {
  mousedown = true;
  if (e.target.classList.contains("row")) {
    e.target.classList.add("colored")
  }
})

gridContainer.addEventListener("mouseover", (e) => {
  if (mousedown && e.target.classList.contains("row")) {
    e.target.classList.add("colored")
  }
})

window.addEventListener("mouseup", () => {
  mousedown = false;
})

createGrid(16)
