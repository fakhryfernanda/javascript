// Declare functions and elements

const switchPage = (currentPage, nextPage) => {
    currentPage.style.display = 'none';
    nextPage.style.display = 'flex';
}

const showNumber = number => console.log(number);

const main = document.querySelector('main');
const homepage = document.querySelector('.homepage');
const selectRounds = document.querySelector('.select-rounds');
const playingPage = document.querySelector('.playing-page');
const playingInfo = document.querySelector('.playing-info')

// Homepage

startButton = document.querySelector('.start-button');
startButton.addEventListener('click', () => switchPage(homepage, selectRounds));

// Select rounds                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

const roundButtons = document.querySelectorAll('.round-button');
let numRounds;
roundButtons.forEach(button => {
    button.addEventListener('click', () => {
        numRounds = Number(button.innerText[0]);
        switchPage(selectRounds, playingPage)
    });
});

// Playing page and playing info

const plays = document.querySelectorAll('.playing-page .play');
let theRound = Number(document.querySelector('.playing-page #the-round > span').innerText);
let playerSelection;
let computerSelection;

plays.forEach(button => {
    button.addEventListener('click', () => {
        playingPage.style.display = 'none';
        playingInfo.style.display = 'flex';

        playerPlay(button);
        setTimeout(() => computerPlay(), 700);

        setTimeout(() => evaluate(playerSelection, computerSelection), 1000);
    });
});

function playerPlay(button) {
    playerSelection = button.innerText.toLowerCase();

    const info = document.createElement('h1');
    info.innerText = `Player plays ${playerSelection}`;
    playingInfo.appendChild(info);
}

function computerPlay() {
    const options = ['rock', 'paper', 'scissor'];
    const index = Math.floor(Math.random() * 3);
    computerSelection = options[index];

    const info = document.createElement('h1');
    info.innerText = `Computer plays ${computerSelection}`;
    playingInfo.appendChild(info);
}

// Game mechanics

const theWinner = document.createElement('h1');

let playerScore = 0;
let computerScore = 0;

function playerWins() {
    theWinner.innerText = 'Player wins';
    playingInfo.appendChild(theWinner);
    playerScore++;
}

function computerWins() {
    theWinner.innerText = 'Computer wins';playingInfo.appendChild(theWinner);
    playingInfo.appendChild(theWinner);
    computerScore++;
}

function draw() {
    theWinner.innerText = 'Draw!';
    playingInfo.appendChild(theWinner);

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