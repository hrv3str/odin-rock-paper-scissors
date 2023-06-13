/*variables */

const cpuChoisePool = ["","rock", "paper", "scissors"];
let playerChoise;
let cpuChoise;
let roundResult;
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

function round {
    if (playerChoise === "rock" && cpuChoise ==="rock") {

    }
}