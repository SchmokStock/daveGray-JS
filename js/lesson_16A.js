// Rock Paper Scissor refactorated with while loop and array

// The Payer is asked if he wanna play a game
const playGame = confirm("Shall we play squat, pull-up, row?");

if (playGame) {
  while (playGame) {
    //play
    const playerChoice = prompt(
      "Do you wanna do a squat, a pull-up, or a row? Please enter."
    );
    // QQQ: Why is else statement "You didn't enter squat, pull-up or row!" triggered? and not "I guess you changed your mind. Maybe next time."
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      // "||" -> OR
      if (
        playerOne === "squat" ||
        playerOne === "pull-up" ||
        playerOne === "row"
      ) {
        const randomThree = Math.floor(Math.random() * 3);
        const computerChoice = ["squat", "pull-up", "row"];

        const computer = computerChoice[randomThree];

        const result =
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
        const playAgain = confirm("Play Again?");
        playAgain ? location.reload() : alert("Ok, Thanks for playing.");
        break;
      } else {
        alert("You didn't enter squat, pull-up or row!");
        continue;
      }
    } else {
      alert("I guess you changed your mind. Maybe next time.");
      break;
    }
  }
} else {
  alert("Ok, maybe next time.");
}
