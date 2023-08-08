const ATTACK_VALUE = 10; // 10 is the base damage value for the attack
const STRONG_ATTACK_VALUE = 17; // 17 is the base damage value for the strong attack
const MONSTER_ATTACK_VALUE = 14; // 14 is the base damage value for the monster attack
const HEAL_VALUE = 20; // 20 is the base heal value for the heal

const MODE_ATTACK = "ATTACK"; // store the string "ATTACK" in the constant MODE_ATTACK
const MODE_STRONG_ATTACK = "STRONG_ATTACK"; // store the string "STRONG_ATTACK" in the constant STRONG_ATTACK_VALUE

const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK"; // store the string "PLAYER_ATTACK" in the constant LOG_EVENT_PLAYER_ATTACK
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK"; // store the string "PLAYER_STRONG_ATTACK" in the constant LOG_EVENT_PLAYER_STRONG_ATTACK
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK"; // store the string "MONSTER_ATTACK" in the constant LOG_EVENT_MONSTER_ATTACK
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL"; // store the string "PLAYER_HEAL" in the constant LOG_EVENT_PLAYER_HEAL
const LOG_EVENT_GAME_OVER = "GAME_OVER"; // store the string "GAME_OVER" in the constant LOG_EVENT_GAME_OVER

// Battle log is an array of strings that describes what happened during the battle
let battleLog = [];
let lastLoggedEntry;

function getMaxLifeValues() {
  // prompt the user to enter a max life value
  const enteredValue = prompt("Maximum life for you and the monster.", "100");

  // convert the input to a number
  const parsedValue = parseInt(enteredValue);
  // if the input is NaN, or is less than or equal to 0, throw an error
  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw { message: "Invalid user input, not a number!" };
  }
  // return the parsed value
  return parsedValue;
}

let chosenMaxLife;

try {
  // Get the values from the input fields
  chosenMaxLife = getMaxLifeValues();
} catch (error) {
  console.log(error);
  // If there was an error, set the value to 100 by default
  chosenMaxLife = 100;
  alert("You entered something wrong, default value of 100 was used.");
}

let currentMonsterHealth = chosenMaxLife; // The current monster health is the maximum life
let currentPlayerHealth = chosenMaxLife; // The current player health is the maximum life
let hasBonusLife = true; // The player has a bonus life

adjustHealthBars(chosenMaxLife); // Adjust the health bars to the maximum life

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry;
  switch (ev) {
    // This is the attack log event
    case LOG_EVENT_PLAYER_ATTACK:
      // The log event is for a monster
      logEntry.target = "MONSTER";

      // 2. Add this object to the global battle log array
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry = {
        // 1. Create an object with the event type, value, target, and final health values
        event: ev,
        value: val,
        target: "MONSTER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      // 2. Add this object to the global battle log array
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry = {
        // 1. Create an object with the event type, value, target, and final health values
        event: ev,
        value: val,
        target: "PLAYER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      // 2. Add this object to the global battle log array
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry = {
        // 1. Create an object with the event type, value, target, and final health values
        event: ev,
        value: val,
        target: "PLAYER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      // 2. Add this object to the global battle log array
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
        // 1. Create an object with the event type, value, target, and final health values
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      // 2. Add this object to the global battle log array
      break;
    default:
      logEntry = {};
  }

  //   // Log an event
  // if (ev === LOG_EVENT_PLAYER_ATTACK) {
  //   // Player attacks monster
  //   logEntry.target = "MONSTER";
  // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   // Player attacks monster with strong attack
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: "MONSTER",
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
  //   // Monster attacks player
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: "PLAYER",
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (ev === LOG_EVENT_PLAYER_HEAL) {
  //   // Player heals
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: "PLAYER",
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (ev === LOG_EVENT_GAME_OVER) {
  //   // Game over
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
}

function reset() {
  currentMonsterHealth = chosenMaxLife; // The current monster health is the maximum life
  currentPlayerHealth = chosenMaxLife; // The current player health is the maximum life
  resetGame(chosenMaxLife); // This function resets the game to the maximum life
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth; // The initial player health is the current player health
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE); // This function deals the base damage to the player
  currentPlayerHealth -= playerDamage; // The current player health is reduced by the damage dealt

  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  ); // This function writes to the battle log

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    // If the current player health is less than or equal to 0 and the bonus life element exists
    hasBonusLife = false; // The player no longer has a bonus life
    removeBonusLife(); // This function removes the bonus life element
    currentPlayerHealth = initialPlayerHealth; // The current player health is set to the initial player health
    setPlayerHealth(initialPlayerHealth); // This function sets the player health to the initial player health
    alert("You would be dead but the bonus life saved you!"); // The player would be dead but the bonus life saved them
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    // If the current monster health is less than or equal to 0 and the current player health is greater than 0
    alert("You won!"); // The player has won
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER WON",
      currentMonsterHealth,
      currentPlayerHealth
    ); // This function writes to the battle log
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    // If the current player health is less than or equal to 0 and the current monster health is greater than 0
    alert("You lost!"); // The player has lost
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER WON",
      currentMonsterHealth,
      currentPlayerHealth
    ); // This function writes to the battle log
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    // If the current player health and the current monster health are less than or equal to 0
    alert("You have a draw!"); // The player has a draw
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "A DRAW",
      currentMonsterHealth,
      currentPlayerHealth
    ); // This function writes to the battle log
  }
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    // If the current monster health or the current player health are less than or equal to 0
    reset(); // This function resets the game
  }
}

function attackMonster(mode) {
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;

  // if (mode === MODE_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (mode === MODE_STRONG_ATTACK) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }

  const damage = dealMonsterDamage(maxDamage); // This function deals the base damage to the monster
  currentMonsterHealth -= damage; // The current monster health is reduced by the damage dealt\
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth); // This function writes to the battle log
  endRound(); // This function ends the round
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}
function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}
function healPlayerHandler() {
  // This function is called when the heal button is clicked
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    // If the current player health is greater than or equal to the maximum life minus the heal value
    alert("You can't heal to more than your max initial health."); // The player can't heal to more than their maximum initial health
    healValue = chosenMaxLife - currentPlayerHealth; // The heal value is the maximum life minus the current player health
  } else {
    healValue = HEAL_VALUE; // The heal value is the heal value
  }

  increasePlayerHealth(HEAL_VALUE); // This function increases the player health by the heal value
  currentPlayerHealth += HEAL_VALUE; // The current player health is increased by the heal value
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  ); // This function writes to the battle log

  endRound(); // This function ends the round
}
function printLogHandler() {
  // This function is called when the log button is clicked
  for (let i = 0; i < 3; i++) {
    // This loop runs 3 times
    console.log("----------");
  }
}
let i = 0;
// this is the outer loop
outerWhile: do {
  // this is the console log inside the outer loop
  console.log("Outer", i);
  // this is the inner loop
  innerFor: for (let j = 0; j < 5; j++) {
    // this is the conditional statement that breaks out of the outer loop
    if (j === 3) {
      break outerWhile;
    }
    // this is the console log inside the inner loop
    console.log("Inner", j);
  }
  // this increments the value of i by 1
  i++;
  // this is the conditional statement that breaks out of the outer loop
} while (i < 3);

// let i = 0;
// while (i < 3) {
//   // This loop runs 3 times
//   console.log("----------");
//   i++;
// }

let j;
// Set the loop to start at the first array element
j = 0;
// Loop through each element in the array
for (const logEntry of battleLog) {
  // Check if the last logged entry is null or undefined
  // or if the last logged entry is less than the current loop index
  if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < j) {
    // Log the index of the current array element
    console.log(`#${j}`);

    // Loop through each key in the current element
    for (const key in logEntry) {
      // Log the key name and its value
      console.log(`${key} => ${logEntry[key]}`);
    }

    // Set the last logged entry to the current loop index
    lastLoggedEntry = j;

    // Exit the loop
    break;
  }

  // Increment the loop index
  j++;
}

attackBtn.addEventListener("click", attackHandler); // This function is called when the attack button is clicked
strongAttackBtn.addEventListener("click", strongAttackHandler); // This function is called when the strong attack button is clicked
healBtn.addEventListener("click", healPlayerHandler); // This function is called when the heal button is clicked
logBtn.addEventListener("click", printLogHandler); // This function is called when the log button is clicked
