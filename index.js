const randomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const heading = document.querySelector(".heading");

var game = 0;
var gameplayer = { dice1: 6, dice2: 6 };

function Change(e) {
  let num = randomNumber();
  document
    .querySelector(`.${e.className} img`)
    .setAttribute("src", `./images/${num}.png`);
  let classword = e.className;
  gameplayer[classword] = num;
  console.log(gameplayer);
  if (game == 1) {
    if (gameplayer.dice1 > gameplayer.dice2) {
        heading.innerHTML = "HOORAH! Player 1 Wins";
        console.log("player1")
    } else if (gameplayer.dice1 == gameplayer.dice2) {
        heading.innerHTML = "Draw";
        console.log("draw")
    } else {
        heading.innerHTML = "HOORAH! Player 2 Wins";
        console.log("player2")
    }
    game = -1;
  } else {
    heading.innerHTML = "Click on the Dice";
  }
  game++;
}
