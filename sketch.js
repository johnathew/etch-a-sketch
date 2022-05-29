const cdiv = document.querySelector(".container");

for (let i = 1; i < 257; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", `grid-item`);

  cdiv.appendChild(div);
  hoverColor();
}

function hoverColor() {
  let gridSquares = document.querySelectorAll(".grid-item");
  gridSquares.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "red";
    });
  });
}
