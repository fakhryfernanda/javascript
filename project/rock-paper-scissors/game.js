function playGame() {

    let numRound = prompt("How many round do you want to play?\n(must be greater than 0)");

    while (!(Number(numRound) > 0)) {
        numRound = prompt("Insert a valid number\nHow many round do you want to play?\n(must be greater than 0)");
        if (numRound === "quit" || numRound === null) {
            return "Game exited";
        }
    }

    numRound = Number(numRound);

    let playerScore = 0;
    let computerScore = 0;

    const options = ['rock', 'paper', 'scissor'];

    function computerPlay() {
        let index = Math.floor(Math.random() * 3);
        return options[index];
    }

    function playerWins() {
        console.log("Player wins!");
        playerScore++;
    }

    function computerWins() {
        console.log("Computer wins!");
        computerScore++;
    }

    function draw() {
        console.log("Draw!")
    }

    function showThePlay(playerSelection, computerSelection) {
        console.log(`Player plays ${playerSelection}`);
        console.log(`Computer plays ${computerSelection}`);
    }

    function evaluate(playerSelection, computerSelection) {
        if (playerSelection == "rock") {
            switch(computerSelection) {
                case "rock" :
                    draw();
                    break;
                case "paper" :
                    computerWins();
                    break;
                case "scissor" :
                    playerWins();
                    break;
            }
        } else if (playerSelection == "paper") {
            switch(computerSelection) {
                case "rock" :
                    playerWins();
                    break;
                case "paper" :
                    draw();
                    break;
                case "scissor" :
                    computerWins();
                    break;
            }
        } else if (playerSelection == "scissor") {
            switch(computerSelection) {
                case "rock" :
                    computerWins();
                    break;
                case "paper" :
                    playerWins();
                    break;
                case "scissor" :
                    draw();
                    break;
            }
        }
    }

    function playRound(playerSelection, computerSelection) {
        showThePlay(playerSelection, computerSelection);
        evaluate(playerSelection, computerSelection);
    }

    function printScore(isCompleted = false) {
        if (isCompleted) {
            console.log("Final Score");
        }
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }
    
    for (let round = 1; round <= numRound; round++) {
        let playerSelection = prompt("Your turn").toLowerCase();
        let computerSelection = computerPlay();

        console.log(`Round ${round}`);
        playRound(playerSelection, computerSelection);
        printScore();
        console.log("\n");
    }

    printScore(isCompleted = true);
    
    // Determine the winner
    if (playerScore > computerScore) {
        return "You win!";
    } else if (playerScore < computerScore) {
        return "You lose!"
    } else {
        return "The game is tied"
    }
}