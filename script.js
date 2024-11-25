
let boxes = document.querySelectorAll(".box");


let turn = "X";
let isGameOver = false;

boxes.forEach(e => {
    e.innerHTML = ""; 
    e.addEventListener("click", () => {
        if (!isGameOver && e.innerHTML === "") {
            e.innerHTML = turn; 
            checkWin();
            checkDraw();
            changeTurn();
        }
    });
});

function changeTurn(){
    if(turn==="X"){
        turn="O";
        document.querySelector(".bg").style.left="85px"
    }else{
         turn="X";
        document.querySelector(".bg").style.left="0px"

    }
} 
function checkWin() {
    let winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
  
    for (let i = 0; i < winConditions.length; i++) {
      let v0 = boxes[winConditions[i][0]].innerHTML;
      let v1 = boxes[winConditions[i][1]].innerHTML;
      let v2 = boxes[winConditions[i][2]].innerHTML;
  
      // Debugging log to ensure correct values are compared
      console.log(v0, v1, v2);
  
      if (v0 !== "" && v0 === v1 && v0 === v2) {
        isGameOver = true;
        document.querySelector("#results").innerHTML = turn + " wins";
        document.querySelector("#play-again").style.display = "inline";
        for(j=0;j<3;j++){
            boxes[winConditions[i][j]].style.backgroundColor="aqua";
        }
      }
    }
  }
  function checkDraw() {
    if (!isGameOver) {
      let isDraw = true;
      let boxes = document.querySelectorAll(".box"); // Ensure this matches your HTML structure
  
      boxes.forEach(e => {
        if (e.innerHTML === "") {
          isDraw = false; // If any box is empty, it's not a draw
        }
      });
  
      if (isDraw) {
        isGameOver = true;
        document.querySelector("#results").innerHTML = "Draw";
        document.querySelector("#play-again").style.display = "inline";
      }
    }
  }
  document.querySelector("#play-again").addEventListener("click", () => {
    isGameOver = false; // Reset game status
    turn = "X"; // Reset turn
    document.querySelector(".bg").style.left = "0"; // Reset background position
    document.querySelector("#results").innerHTML = ""; // Clear results message
    document.querySelector("#play-again").style.display = "none"; // Hide play-again button

    boxes.forEach(e => { // Loop through all boxes
        e.innerHTML = ""; // Clear box content
        e.style.removeProperty("background-color"); // Remove background color
        e.style.color = "#fff"; // Reset text color
    });
}); 





    

