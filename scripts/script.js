/*variables */

let playerScore = 0;
let cpuScore = 0;
const cpuChoisePool = ["","rock", "paper", "scissors"];
const messagePool = ["Round is yours! ", "It's a tie. ", "Bad for you! You lost round. ", "Congratulations! You won the game", "Sorry, you've lost the game." , "Solid tie, good luck another time"];
let playerChoise;
let cpuChoise;
let roundResult;
let roundCounter;
const screen = document.getElementById('scrn-button');
const cpuScreen = document.getElementById('cpu-screen')

/*players input*/

function getPlayerChoise() {
    screen.textContent = 'Choose your option:';
    const optionButtons = document.querySelectorAll('button.option');
    let playerChoice = null;
  
    optionButtons.forEach(button => {
      button.addEventListener('click', () => {
        playerChoice = button.getAttribute('name');
        screen.textContent =`You chose: ${playerChoice}`;
      });
    });
  
    return playerChoice;
  }
  

/*cpu input*/

function getComputerChoise() {
    const optionButtons = document.querySelectorAll('button.option');
    let cpuChoiseChoice = null;
    let cpuImage = null;
    let cpuButton = null;
    let cpuScreenDiv = document.getElementById('cpu-screen');
    
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            cpuChoise = cpuChoisePool[Math.floor(Math.random() * 3 + 1)];
            switch (cpuChoise) {
                case "rock":
                    cpuButton = document.createElement('button');
                    cpuButton.setAttribute('class', 'option');
                    cpuImage = document.createElement ('i');
                    cpuImage.setAttribute('class','fa-regular fa-hand-back-fist')
                    cpuButton.appendChild(cpuImage);
                    break;
                case "paper":
                    cpuButton = document.createElement('button');
                    cpuButton.setAttribute('class', 'option');
                    cpuImage = document.createElement ('i');
                    cpuImage.setAttribute('class','ffa-regular fa-hand')
                    cpuButton.appendChild(cpuImage);
                case "scissors":
                    cpuButton = document.createElement('button');
                    cpuButton.setAttribute('class', 'option');
                    cpuImage = document.createElement ('i');
                    cpuImage.setAttribute('class','fa-regular fa-hand-scissors')
                    cpuButton.appendChild(cpuImage);
            }
            cpuScreenDiv.appendChild(cpuButton);
        });
      });
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



function round(playerChoise, cpuChoise) {
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

screen.addEventListener('click', game);

function game() {
for (roundCounter = 0; roundCounter < 5; roundCounter++) {
    console.log("Round " + (roundCounter + 1) + "!");
    getPlayerChoise();
    getComputerChoise();
    round();
};
if (playerScore > cpuScore) {
    console.log(messagePool[3]);
} else if (playerScore < cpuScore) {
    console.log(messagePool[4]);
} else {
    console.log(messagePool[5]);
}
}