// P: Parameters = player1Choice, player2Choice (string data types);
// function name = battle
// R: return number (0, 1, or 2 only)
// E: Example: ("rock", "paper") => we expect a result of 2
// P: Pseudocode - see pseudocode throughout

function battle(player1Choice, player2Choice) {
  // Create a variable that will hold the outcome.
  var outcome = 0;

  // Create an if/else statement that covers every possible outcome:
  // player1 chooses rock, player2 chooses rock (outcome = 0)
  if (player1Choice === "rock" && player2Choice === "rock") {
    outcome = 0;
  }

  // player1 chooses rock, player2 chooses paper (outcome = 2)
  else if (player1Choice === "rock" && player2Choice === "paper") {
    outcome = 2;
  }

  // player1 chooses rock, player2 chooses scissors (outcome = 1)
  else if (player1Choice === "rock" && player2Choice === "scissors") {
    outcome = 1;
  }

  // player1 chooses paper, player2 chooses rock (outcome = 1)
  else if (player1Choice === "paper" && player2Choice === "rock") {
    outcome = 1;
  }

  // player1 chooses paper, player2 chooses paper (outcome = 0)
  else if (player1Choice === "paper" && player2Choice === "paper") {
    outcome = 0;
  }

  // player1 chooses paper, player2 chooses scissors (outcome = 2)
  else if (player1Choice === "paper" && player2Choice === "scissors") {
    outcome = 2;
  }

  // player1 chooses scissors, player2 chooses rock (outcome = 2)
  else if (player1Choice === "scissors" && player2Choice === "rock") {
    outcome = 2;
  }

  // player1 chooses scissors, player2 chooses paper (outcome = 1)
  else if (player1Choice === "scissors" && player2Choice === "paper") {
    outcome = 1;
  }

  // player1 chooses scissors, player2 chooses scissors (outcome = 0)
  else {
    outcome = 0;
  }

  // Return the outcome
  return outcome;
}

// P: Parameters: NONE; function name is provided
// R: return string ("rock", "paper", or "scissors" ONLY)
// E: Example: Invoking the function should cause a randomly-generated result
// of either "rock", "paper", or "scissors"
// P: Pseudocode - see pseudocode throughout

function randomComputerChoice() {
  // Create an array of the possible choices and set it equal to a variable.
  var choiceArray = ["rock", "paper", "scissors"];

  // Generate a random number between 0 and 2 and set it equal to a variable.
  var randIndex = Math.floor(Math.random() * 3);

  // Return a reference to one of the strings in the array in the following
  // format array[random index number].
  return choiceArray[randIndex];
}

// This is just a helper function to both log and alert something at the same time.
function show(text) {
  console.log(text);
  alert(text);
}

var player1Score = 0;
var computerScore = 0;
var answer, humanChoice, computerChoice, result, resultText;

// This is an infinite loop.
while (true) {
  humanChoice = prompt("Rock, paper, or scissors?");
  computerChoice = randomComputerChoice();
  resultText = "Computer chose " + computerChoice + ". ";

  result = battle(humanChoice, computerChoice);

  if (result === 0) {
    show(resultText + "Tie!");
  } else if (result === 1) {
    player1Score++;
    show(resultText + "Player 1 wins!");
  } else {
    computerScore++;
    show(resultText + "Computer wins!");
  }

  show("Human: " + player1Score + " | Computer: " + computerScore);
  answer = prompt("Want to play again?");

  if (answer === null || answer.toLowerCase() !== "yes") {
    // Exit the loop
    break;
  }
}
