// My first programed interactive Game

// The Payer is asked if he wanna play a game
let playGame = confirm("Shall we play squat, pull-up, or row?");

if (playGame) {
  //play
  let playerChoice = prompt(
    "Do you wanna do a squat, a pull-up, or a row? Please enter."
  );
  if (playerChoice) {
    let playerOne = playerchoice.trim().toLowerCase();
    // || equal OR
    if (
      playerOne === "squat" ||
      playerOne === "pull-up" ||
      playerOne === "row"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "squat"
          : computerChoice === 2
          ? "pull-up"
          : // This is the third and final possobility, no need to check like above
                  "row";
        let result =
            playerOne === computer ? "Tie game!"
                : playerOne === "squat" && computer === "pull-up"
                    ? `playerOn: ${playerOne}\nComputer: ${computer}\nComputer wins!`
    } else {
      alert("You didn't enter squat, pull-up or row!");
    }
  } else {
    alert("i guess you changed your mind. Maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}
