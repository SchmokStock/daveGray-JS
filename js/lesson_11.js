// My first programed interactive Game

// The Payer is asked if he wanna play a game
let playGame = confirm("Shall we play squat, pull-up, row?");

if (playGame) {
  //play
  let playerChoice = prompt(
    "Do you wanna do a squat, a pull-up, or a row? Please enter."
  );
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    // "||" -> OR
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
          : // This is the third and final possibility, no need to check like above
            "row";

      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "squat" && computer === "pull-up"
          ? `You: ${playerOne}\nSick Cunt: ${computer}\nSick Cunt wins!`
          : playerOne === "pull-up" && computer === "row"
          ? `You: ${playerOne}\nSick Cunt: ${computer}\nSick Cunt wins!`
          : playerOne === "row" && computer === "squad"
          ? `You: ${playerOne}\nSick Cunt: ${computer}\nSick Cunt wins!`
          : `You: ${playerOne}\nSick Cunt: ${computer}\nYou win!`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Ok, Thanks for playing");
    } else {
      alert("You didn't enter squat, pull-up or row!");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}
