// Rock, Paper, Scissors: refactored with functions

// Initialize game
const initGame = () => {
  // Player is asked if he wanna start to play the game.
  const startGame = confirm("Shall we play Squat, pull-up, row?");
  //   console.log(startGame);

  // startGame = true -> game start
  // startGame = false -> alert("Ok, maybe next time.")
  // calculated with Ternary Opereator
  startGame ? playGame() : alert("Ok, maybe next time.");
};

const playGame = () => {
  // while (true) loops until a break statement comes in
  while (true) {
    // Prompt to enter value to continue game
    const playerChoice = getPlayerChoice(
      prompt("Do you wanna do a squat, a pull-up, or a row? Please enter.")
    );

    if (getPlayerChoice) {
    } else if (!getPlayerChoice) {
    }
  }
};

// Is currently not be called
const okMaybeNextTime = () => {
  alert("Ok, maybe next time.");
};

// Prompt to enter value to continue game
const getPlayerChoice = (promptValue) => {
  return promptValue;
};

const toLowerCasePlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  }
};

const PlayerChoiceValidation = () => {
  playerOne === "squat" || playerOne === "pull-up" || playerOne === "row";
};

// Game is called
initGame();
