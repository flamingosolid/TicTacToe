// const cell1 = document.querySelector(".cell1");
// const cell2 = document.querySelector(".cell2");
// const cell3 = document.querySelector(".cell3");
// const cell4 = document.querySelector(".cell4");
// const cell5 = document.querySelector(".cell5");
// const cell6 = document.querySelector(".cell6");
// const cell7 = document.querySelector(".cell7");
// const cell8 = document.querySelector(".cell8");
// const cell9 = document.querySelector(".cell9");

// const player1 = document.querySelector("");

let currentPlayer = true;
let playerX = true;

const cells = document.querySelectorAll(".container");
for (const el of cells) {
  const cell = el.querySelector(".cell");
  console.log(cell);
  cell.addEventListener("click", function() {
  firstAndSecond()
  })


  const firstAndSecond = function () {
  if (currentPlayer) {
  const letter = document.createElement("h1");
   letter.innerHTML = "X";
    cell.appendChild(letter);
    currentPlayer = false;
   } else {
      letter = document.createElement("h1");
      letter.innerHTML = "O";
      cell.appendChild(letter);
      currentPlayer = true; }};

}


const x = function (cell) {
  const letterX = document.createElement("h1");
  letterX.innerHTML = "X";
  cell.appendChild(letterX);
  playerX = false;
};
const o = function (cell) {
  const letterO = document.createElement("h1");
  letterO.innerHTML = "O";
  cell.appendChild(letterO);
  playerX = true;
};

const playing = function () {
  if (playerX) {
    x(cell1);
  } else {
    o(cell1);
  }
};

// cell1.addEventListener("click", (e) => {
//   if (playerX) {
//     x(cell1);
//   } else {
//     o(cell1);
//   }
//   cell1.disabled = true;
// });
// cell2.addEventListener("click", () => {
//   if (playerX) {
//     x(cell2);
//   } else {
//     o(cell2);
//   }
// });
// cell3.addEventListener("click", () => {
//   if (playerX) {
//     x(cell3);
//   } else {
//     o(cell3);
//   }
// });
// cell4.addEventListener("click", () => {
//   if (playerX) {
//     x(cell4);
//   } else {
//     o(cell4);
//   }
// });
// cell5.addEventListener("click", () => {
//   if (playerX) {
//     x(cell5);
//   } else {
//     o(cell5);
//   }
// });
// cell6.addEventListener("click", () => {
//   if (playerX) {
//     x(cell6);
//   } else {
//     o(cell6);
//   }
// });
// cell7.addEventListener("click", () => {
//   if (playerX) {
//     x(cell7);
//   } else {
//     o(cell7);
//   }
// });
// cell8.addEventListener("click", () => {
//   if (playerX) {
//     x(cell8);
//   } else {
//     o(cell8);
//   }
// });
// cell9.addEventListener("click", () => {
//   if (playerX) {
//     x(cell9);
//   } else {
//     o(cell9);
//   }
// });
