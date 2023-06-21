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
const playerOptionDiv = document.getElementById('player-options');
let divRock;
let divPaper;
let divScissors;
const playerScoreOutput = document.getElementById('player-score');
const cpuScoreOutput = document.getElementById('cpu-score');

/*players input*/

function showPlayerOption() {

  const rock = document.createElement('i'); //creates 'rock' button
  rock.setAttribute('class', 'fa-regular fa-hand-back-fist');
  rock.setAttribute('name', 'rock')
  const rockButton = document.createElement('button');
  rockButton.setAttribute('class', 'option player slide-in')
  rockButton.setAttribute('name', 'rock')
  rockButton.appendChild(rock);
  divRock = rockButton;
  playerOptionDiv.appendChild(rockButton);

  const paper = document.createElement('i'); //creates 'paper' button
  paper.setAttribute('class', 'fa-regular fa-hand');
  paper.setAttribute('name', 'paper')
  const paperButton = document.createElement('button');
  paperButton.setAttribute('class', 'option player slide-in')
  paperButton.setAttribute('name', 'paper')
  paperButton.appendChild(paper);
  divPaper = paperButton;
  playerOptionDiv.appendChild(paperButton);

  const scissors = document.createElement('i'); //creates 'scissors' button
  scissors.setAttribute('class', 'fa-regular fa-hand-scissors');
  scissors.setAttribute('name', 'scissors')
  const scissorsButton = document.createElement('button');
  scissorsButton.setAttribute('class', 'option player slide-in')
  scissorsButton.setAttribute('name', 'scissors')
  scissorsButton.appendChild(scissors);
  divScissors = scissorsButton;
  playerOptionDiv.appendChild(scissorsButton);

    const totalElements = 3;
    let transitionCount = 0;
  
    function handleTransitionEnd() {
      transitionCount++;
  
      if (transitionCount === totalElements) {
        return;
      }
    }
    rockButton.addEventListener('transitionend', handleTransitionEnd);
    paperButton.addEventListener('transitionend', handleTransitionEnd);
    scissorsButton.addEventListener('transitionend', handleTransitionEnd);
  
}

function hidePlayerOption() { //hide each of options
  const buttons = [divRock, divPaper, divScissors];
  function removeButton(button) {
    button.classList.remove('slide-in');
    button.classList.add('slide-out');
  const handleTransitionEnd = () => {
    playerOptionDiv.removeChild(button);
  };
  button.addEventListener('transitionend', handleTransitionEnd);
  }
  buttons.forEach(removeButton); // plays animation and belete buttons
  while (playerOptionDiv.firstChild) {
    playerOptionDiv.firstChild.remove(); //clears the div
  }
}

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
    playerOptionDiv.textContent = roundResult;
}
  
function win() {
    playerScore++;
    roundResult = `${messagePool[0]}Your score is: ${playerScore}. CPU score is: ${cpuScore}.`;
    console.log(roundResult);
    playerOptionDiv.textContent = roundResult;
}
  
function lost() {
    cpuScore++;
    roundResult = `${messagePool[2]}Your score is: ${playerScore}. CPU score is: ${cpuScore}.`;
    console.log(roundResult);
    playerOptionDiv.textContent = roundResult;
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
    screen.classList.add('no-click');
    playerOptionDiv.textContent = '';
    message.textContent = `Round ${roundCounter + 1}!`;
    console.log(`Starting Round ${roundCounter + 1}...`);
    playerScoreOutput.textContent = playerScore;
    cpuScoreOutput.textContent = cpuScore;
    screenCPU.textContent = `</>`;

      showPlayerOption();
      getPlayerInput().then((input) => {
      playerInput = input;
      screen.textContent = `You chose: ${playerInput}`;
      hidePlayerOption();
      cpuInput = getCpuInput();
      screenCPU.textContent = `CPU chose: ${cpuInput}`;
  
      playRound(playerInput, cpuInput);
      roundCounter++;
  
      if (cpuScore < 3 && playerScore < 3) {
        setTimeout(playGame, 2000);
      } else {
        if (playerScore > cpuScore) {
          playerScoreOutput.textContent = playerScore;
          console.log(messagePool[3]);
          message.textContent = messagePool[3];
          endgame();
        } else if (playerScore < cpuScore) {
          cpuScoreOutput.textContent = cpuScore;
          console.log(messagePool[4]);
          message.textContent = messagePool[4];
          endgame();
        } else {
          console.log(messagePool[5]);
          message.textContent = messagePool[5];
          endgame();
        }
      }
    });
  }

  screen.addEventListener('click', playGame);

  function endgame() {
    screen.textContent = 'Try again';
    screen.classList.remove('no-click');
    function reload() {
      location.reload();
    };
    screen.removeEventListener('click', playGame);
    screen.addEventListener('click', reload);
  }