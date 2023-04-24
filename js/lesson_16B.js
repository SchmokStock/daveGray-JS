// Rock, Paper, Scissors: refactored with functions

// Initialize game
const initGame = () => {
  // Player is asked if he wanna start the game.
  const startGame = confirm("Shall we play Squat, pull-up, row?");
  //   console.log(startGame);

  // startGame gets true -> game start
  // startGame gets false -> alert("Ok, maybe next time.")
  // calculated with Ternary Opereator
  startGame ? playGame() : alert("Ok, maybe next time.");
};

const playGame = () => {
  // while (true) loops until a break statement comes in
  while (true) {
    const playerChoice = playerChoicePrompt();
    // playerChoice();

    if (playerChoiceStatement()) {
      let playerOne;
      let computer;
      let playerChoice = playerChoiceLowerCase();
      if (PlayerChoiceValidation) {
      }
    }
  }
};

// Is currently not be called
const okMaybeNextTime = () => {
  alert("Ok, maybe next time.");
};

// Prompt to enter value for game
const playerChoicePrompt = () => {
  prompt("Do you wanna do a squat, a pull-up, or a row? Please enter.");
};

const playerChoiceStatement = () => {};

const playerChoiceLowerCase = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  }
};

const PlayerChoiceValidation = () => {
  playerOne === "squat" || playerOne === "pull-up" || playerOne === "row";
};

// Game is called
initGame();
