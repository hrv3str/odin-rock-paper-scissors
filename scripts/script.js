const cpuChoisePool = ["","rock", "paper", "scissors"];
let playerChoise;
let cpuChoise;
let roundResult;
let gameScore;

playerChoise = prompt("Choose your destiny (Rock, Paper Or Scissors):");
playerChoise = playerChoise.toLowerCase();
console.log(playerChoise);

if (playerChoise !== "rock" && playerChoise !== "paper" && playerChoise !=="scissors") {
    console.log("Wrong! You should promt rock, paper or scissors!")
}

cpuChoise = cpuChoisePool[Math.floor(Math.random() * 3 + 1)];
console.log(cpuChoise)

/* function round {
    if (playerChoise === "rock" && cpuChoise ==="rock") {

    }
} */