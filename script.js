
let currentPlayer = true;

const cell1 = document.getElementById("cell1")
const cell2 = document.getElementById("cell2")
const cell3 = document.getElementById("cell3")
const cell4 = document.getElementById("cell4")
const cell5 = document.getElementById("cell5")
const cell6 = document.getElementById("cell6")
const cell7 = document.getElementById("cell7")
const cell8 = document.getElementById("cell8")
const cell9 = document.getElementById("cell9")


const cells = document.querySelectorAll(".container");
for (const el of cells) {
  const cell = el.querySelector(".cell");
  cell.addEventListener("click", function(e) {
    if (!e.target.classList.contains("clicked")) {
      e.target.classList.add("clicked")}  
      if(currentPlayer){
        cell.innerHTML = "X"
        currentPlayer = false
      }else{
        cell.innerHTML = "O"
        currentPlayer = true
      }
    })
    if (cell1.value === "X"){
      console.log("You Won!")
    }
    console.log(cell1)
}