/*variables */
let playerScore = 0;
let cpuScore = 0;
const cpuInputPool = ["rock", "paper", "scissors"];
const messagePool = ["Round is yours! ", "It's a tie. ", "Bad for you! You lost round. ", "Congratulations! You won the game", "Sorry, you've lost the game." , "Solid tie, good luck another time"];
let playerInput;
let cpuInput;
let roundResult;
let roundCounter = 0;
const screen = document.getElementById('scrn-button');
const message = document.getElementById('message');
const screenCPU = document.getElementById('scrn-cpu')

/*players input*/

function getPlayerInput() {
    const optionButtons = document.querySelectorAll('button.option.player');
    screen.textContent = 'Choose one';
  
    return new Promise((resolve) => {
      const handleButtonClick = (event) => {
        const button = event.target;
        const playerInput = button.getAttribute('name');
  
        resolve(playerInput);
      };
  
      optionButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
      });
    });
  }
/*cpu input*/

function getCpuInput() {
    const randomIndex = Math.floor(Math.random() * cpuInputPool.length);
    cpuInput = cpuInputPool[randomIndex];
    console.log('CPU input:', cpuInput);
  
    return cpuInput;
  }
  
/*round calculation*/

function tie() {
    roundResult = `${messagePool[1]}Your score is: ${playerScore}. CPU score is: ${cpuScore}.`;
    console.log(roundResult);
    message.textContent = roundResult;
}
  
function win() {
    playerScore++;
    roundResult = `${messagePool[0]}Your score is: ${playerScore}. CPU score is: ${cpuScore}.`;
    console.log(roundResult);
    message.textContent = roundResult;
}
  
function lost() {
    cpuScore++;
    roundResult = `${messagePool[2]}Your score is: ${playerScore}. CPU score is: ${cpuScore}.`;
    console.log(roundResult);
    message.textContent = roundResult;
}

function playRound(playerInput, cpuInput) {
    switch (playerInput) {
        case "rock":
            switch (cpuInput) {
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
            switch (cpuInput) {
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
            switch (cpuInput) {
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
    playerInput = "";
    cpuInput = "";
}

/* playing the game*/

function playGame() {
    message.textContent = `Round ${roundCounter + 1}!`;
    console.log(`Starting Round ${roundCounter + 1}...`);
    screenCPU.textContent = `Your score is ${playerScore}. CPU score is ${cpuScore}`;
    getPlayerInput().then((input) => {
      playerInput = input;
      screen.textContent = `You chose: ${playerInput}`;
  
      cpuInput = getCpuInput();
      screenCPU.textContent = `CPU chose: ${cpuInput}`;
  
      playRound(playerInput, cpuInput);
      roundCounter++;
  
      if (cpuScore < 3 && playerScore < 3) {
        setTimeout(playGame, 5000);
      } else {
        if (playerScore > cpuScore) {
          console.log(messagePool[3]);
          message.textContent = messagePool[3];
        } else if (playerScore < cpuScore) {
          console.log(messagePool[4]);
          message.textContent = messagePool[4];
        } else {
          console.log(messagePool[5]);
          message.textContent = messagePool[5];
        }
      }
    });
  }

  screen.addEventListener('click', playGame);