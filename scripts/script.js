/*variables */

const cpuChoisePool = ["","rock", "paper", "scissors"];
const messagePool = ["Round is yours! ", "It'/s a tie. ", "Bad for you! You lost round. ", "Congratulations! You won the game", "Sorry, you/'ve lost."]
const messageScore = "Your score is: " + playerScore + ". CPU score is: " + cpuScore + ".";
let playerChoise;
let cpuChoise;
let roundResult;
let playerScore = 0;
let cpuScore = 0;
let gameScore;

/*players input*/

playerChoise = prompt("Choose your destiny (Rock, Paper Or Scissors):");
playerChoise = playerChoise.toLowerCase();

if (playerChoise !== "rock" && playerChoise !== "paper" && playerChoise !=="scissors") {
    console.log("Wrong! You should promt rock, paper or scissors!")
}

/*cpu input*/

cpuChoise = cpuChoisePool[Math.floor(Math.random() * 3 + 1)];

/*round calculation*/

function tie() {
    roundResult = messagePool[1] + messageScore;
    console.log(roundResult);
}

function win() {
    playerScore++;
    roundResult = messagePool[0] + messageScore;
    console.log(roundResult);
}

function lost() {
    cpuScore++;
    roundResult = messagePool[2] + messageScore;
    console.log(roundResult);
}

function round() {
    if (playerChoise === "rock") {
        if (cpuChoise ==="rock") {
            tie();
        } else if (cpuChoise === "scissors") {
            win();
        } else if (cpuChoise === "paper") {
            lost();
        }
    } else if (playerChoise === "paper") {
        if
    }
}