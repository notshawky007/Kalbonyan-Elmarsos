//  Get the button element from the DOM
const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

//Create a function to get the player's choice
const getPlayerChoice = function () {
  //Prompt the player to enter a choice
  const selection = prompt(
    //Display the available choices
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  //Check if the player's choice is valid
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    //If invalid, alert the player and return a valid choice
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  //Return the player's choice
  return selection;
};

const getComputerChoice = function () {
  const randomValue = math.random(); // generate a random number between 0 and 1
  if (randomValue < 0.34) {
    // if the number is less than 0.34, return 'ROCK'
    return ROCK;
  } else if (randomValue < 0.67) {
    // if the number is less than 0.67, return 'PAPER'
    return PAPER;
  } else {
    // otherwise, return 'SCISSORS'
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  // This function compares the computer choice and player choice
  // If both choices are the same, then it's a draw
  // Otherwise, the player wins if the computer choice is rock and the player choice is paper, or if the computer choice is paper and the player choice is scissors, or if the computer choice is scissors and the player choice is rock
  // Otherwise, the player loses
  return cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
};

// const getWinner = function (cChoice, pChoice) {
//   // if the choices are the same, it's a draw
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     // if not, we have to check if the computer won
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     // if not, the player won
//     return RESULT_COMPUTER_WINS;
//   }
// };

// This code will run when the button is clicked
startGameBtn.addEventListener("click", () => {
  //Check if the game is running
  if (gameIsRunning) {
    //If running, alert the player and return
    alert("Game is already running!");
    return;
  }
  console.log("Game is starting...");
  //Call the getPlayerChoice function
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  let winner;
  let message;
  //Check if the player's choice is valid
  if (playerSelection) {
    //If valid, call the getWinner function
    winner = getWinner(computerSelection, playerSelection);
  } else {
    //If invalid, call the getWinner function with the default choice
    winner = getWinner(computerSelection);
  }
  //Display the result

  if (winner === RESULT_DRAW) {
    message = `You picked ${playerSelection}, computer picked ${computerSelection}, so it's a draw!`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = `You picked ${playerSelection}, computer picked ${computerSelection}, so you won!`;
  } else {
    message = `You picked ${playerSelection}, computer picked ${computerSelection}, so you lost!`;
  }
  alert(message);
  gameIsRunning = false;
});

// not related to the game logic  - just for testing
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};

combine(
  showResult.bind(this, "The result after adding all numbers is:"),
  "ADD",
  1,
  5,
  "fdsa",
  -3,
  6,
  10
);

combine(
  showResult.bind(this, "The result after subtracting all numbers is:"),
  "SUBTRACT",
  1,
  10,
  15,
  20
);
