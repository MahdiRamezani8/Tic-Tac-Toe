"use strict";
const dataBase = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
// elements & variables
const btnElem = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const modalMessage = document.querySelector(".modal__message");
const modalPlayAgain = document.querySelector(".modal__play-again");
let playerTurn = 1;
let clickCounter = 0;
// functions
const handleBtn = function () {
  this.classList.add(`player${playerTurn}`);
  this.disabled = true;
  const { row, index } = this.dataset;
  dataBase[row][index] = playerTurn;
  clickCounter += 1;
  checkTheWinner();
  playerTurn = playerTurn == 1 ? 2 : 1;
};
const checkTheWinner = () => {
  if (clickCounter == 9) gameover(false);
  const check1 = dataBase[0].join("");
  const check2 = dataBase[1].join("");
  const check3 = dataBase[2].join("");
  check1 == "111" || check2 == "111" || check3 == "111"
    ? gameover(playerTurn)
    : "";

  (dataBase[0][0] == "1" && dataBase[1][0] == "1" && dataBase[2][0] == "1") ||
  (dataBase[0][1] == "1" && dataBase[1][1] == "1" && dataBase[2][1] == "1") ||
  (dataBase[0][2] == "1" && dataBase[1][2] == "1" && dataBase[2][2] == "1")
    ? gameover(playerTurn)
    : "";

  check1 == "222" || check2 == "222" || check3 == "222"
    ? gameover(playerTurn)
    : "";

  (dataBase[0][0] == "2" && dataBase[1][0] == "2" && dataBase[2][0] == "2") ||
  (dataBase[0][1] == "2" && dataBase[1][1] == "2" && dataBase[2][1] == "2") ||
  (dataBase[0][2] == "2" && dataBase[1][2] == "2" && dataBase[2][2] == "2")
    ? gameover(playerTurn)
    : "";

  (dataBase[0][2] == "1" && dataBase[1][1] == "1" && dataBase[2][0] == "1") ||
  (dataBase[0][0] == "1" && dataBase[1][1] == "1" && dataBase[2][2] == "1")
    ? gameover(playerTurn)
    : "";

  (dataBase[0][2] == "2" && dataBase[2][2] == "2" && dataBase[2][0] == "2") ||
  (dataBase[0][0] == "2" && dataBase[2][2] == "2" && dataBase[2][2] == "2")
    ? gameover(playerTurn)
    : "";
};
const gameover = winner => {
  modalMessage.innerHTML = !winner
    ? `no one won the match`
    : `player ${winner} won the match`;
  modal.classList.add("show");
};
const playAgain = () => location.reload();
// event listeners
btnElem.forEach(btn => btn.addEventListener("click", handleBtn));
modalPlayAgain.addEventListener("click", playAgain);