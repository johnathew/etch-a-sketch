const DEFAULT_SIZE = 16;
let currentSize = DEFAULT_SIZE;

const grid = document.getElementById("grid");
const sizeSlider = document.getElementById("sizeSlider");
const sizeValue = document.getElementById("sizeValue")

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function changeSize(value) {
  setCurrentSize(value);
  updateSizeValue(value);
  reloadGrid();
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} * ${value}`;
}

function setCurrentSize(newValue) {
  currentSize = newValue;
}

function reloadGrid() {
  clearGrid();
  setupGrid(currentSize);
}

function clearGrid() {
  grid.innerHTML = "";
}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");

    gridElement.addEventListener("mouseover", changeColor);
    gridElement.addEventListener("mousedown", changeColor);
    grid.appendChild(gridElement);
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = "green";
}

window.onload = () => {
  setupGrid(DEFAULT_SIZE);
};
