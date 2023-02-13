const cell1 = document.querySelector(".cell1");
const cell2 = document.querySelector(".cell2");
const cell3 = document.querySelector(".cell3");
const cell4 = document.querySelector(".cell4");
const cell5 = document.querySelector(".cell5");
const cell6 = document.querySelector(".cell6");
const cell7 = document.querySelector(".cell7");
const cell8 = document.querySelector(".cell8");
const cell9 = document.querySelector(".cell9");

// const player1 = document.querySelector("");

const x = function (cell) {
  const letterX = document.createElement("h1");
  letterX.innerHTML = "X";
  cell.appendChild(letterX);
};
const o = function (cell) {
  const letterO = document.createElement("h1");
  letterO.innerHTML = "O";
  cell.appendChild(letterO);
};

cell1.addEventListener("click", () => {
  x(cell1);
  o(cell1);
});
cell2.addEventListener("click", () => {
  x(cell2);
  o(cell2);
});
cell3.addEventListener("click", () => {
  x(cell3);
  o(cell3);
});
cell4.addEventListener("click", () => {
  o(cell4);
  x(cell4);
});
cell5.addEventListener("click", () => {
  o(cell5);
  x(cell5);
});
cell6.addEventListener("click", () => {
  o(cell6);
  x(cell6);
});
cell7.addEventListener("click", () => {
  o(cell7);
  x(cell7);
});
cell8.addEventListener("click", () => {
  o(cell8);
  x(cell8);
});
cell9.addEventListener("click", () => {
  o(cell9);
  x(cell9);
});
