console.log("Player plays rock\nComputer plays paper")

function playGame() {
    const numRound = Number(prompt("How many round do you want to play?"))

    let playerScore = 0;
    let computerScore = 0;

    const options = ['rock', 'paper', 'scissor'];

    function computerPlay() {
        let index = Math.floor(Math.random() * 3);
        return options[index];
    }

    function playerWins() {
        playerScore++;
    }

    function computerWins() {
        computerScore++;
    }

    function printScore() {
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }

    function showThePlay(playerSelection, computerSelection) {
        console.log(`Player plays ${playerSelection}`);
        console.log(`Computer plays ${computerSelection}`);
    }

    function playRound(playerSelection, computerSelection) {
        showThePlay(playerSelection, computerSelection);
        if (playerSelection == "rock") {
            switch(computerSelection) {
                case "rock" :
                    console.log("Draw!");
                    break;
                case "paper" :
                    computerWins();
                    console.log("Computer wins! Paper beats rock.");
                    break;
                case "scissor" :
                    playerWins();
                    console.log("Player wins! Rock beats scissor.");
                    break;
            }
        }
    }
    
    for (let round = 1; round <= numRound; round++) {
        let playerSelection = prompt("Your turn").toLowerCase();
        let computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
        printScore();
    }
}