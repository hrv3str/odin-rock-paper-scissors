/*variables */

let playerScore = 0;
let cpuScore = 0;
const cpuChoisePool = ["","rock", "paper", "scissors"];
const messagePool = ["Round is yours! ", "It'/s a tie. ", "Bad for you! You lost round. ", "Congratulations! You won the game", "Sorry, you/'ve lost."];
let playerChoise;
let cpuChoise;
let roundResult;
let roundCounter;

/*players input*/

function playerInput() {
playerChoise = prompt("Your turn! Hit Rock, Paper Or Scissors:");
playerChoise = playerChoise.toLowerCase();
if (playerChoise !== "rock" && playerChoise !== "paper" && playerChoise !=="scissors") {
    console.log("Wrong! You should promt rock, paper or scissors!");
    playerInput();
} else {
    console.log("You hit " + playerChoise + ".")
};
}

/*cpu input*/

function cpuInput() {
cpuChoise = cpuChoisePool[Math.floor(Math.random() * 3 + 1)];
console.log("CPU hits " + cpuChoise + ".")
}

/*round calculation*/

function tie() {
    roundResult = messagePool[1] + "Your score is: " + playerScore + ". CPU score is: " + cpuScore + ".";
    console.log(roundResult);
}

function win() {
    playerScore++;
    roundResult = messagePool[0] + "Your score is: " + playerScore + ". CPU score is: " + cpuScore + ".";
    console.log(roundResult);
}

function lost() {
    cpuScore++;
    roundResult = messagePool[2] + "Your score is: " + playerScore + ". CPU score is: " + cpuScore + ".";
    console.log(roundResult);
}

function round() {
    switch (playerChoise) {
        case "rock":
            switch (cpuChoise) {
                case "rock":
                    tie();
                    break;
                case "scissors":
                    win();
                    break;
                case "paper":
                    lost();
                    break;
            }
            break;
        case "paper":
            switch (cpuChoise) {
                case "rock":
                    win();
                    break;
                case "paper":
                    tie();
                    break;
                case "scissors":
                    lost();
                    break;
            }
            break;
        case "scissors":
            switch (cpuChoise) {
                case "rock":
                    lost();
                    break;
                case "paper":
                    win();
                    break;
                case "scissors":
                    tie();
                    break;
            }
            break;
    }
}

for (roundCounter = 0; roundCounter < 5; roundCounter++) {
    console.log("Round " + (roundCounter + 1) + "!");
    playerInput();
    cpuInput();
    round ();
}

/* end game */

switch ()