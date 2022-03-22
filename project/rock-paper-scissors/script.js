// Declare functions

const switchPage = (currentPage, nextPage) => {
    currentPage.style.visibility = 'hidden';
    nextPage.style.visibility = 'visible';
}

const showNumber = (number) => {
    console.log(number);
}

// Before the game starts

homepage = document.querySelector('.homepage');
selectRounds = document.querySelector('.select-rounds');

startButton = document.querySelector('.start-button');
startButton.addEventListener('click', () => switchPage(homepage, selectRounds));
// startButton.addEventListener('click', () => showNumber(10));

// Select rounds                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

playingPage = document.querySelector('.playing-page')

buttons = document.querySelectorAll('.rounds');
let numRounds = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        numRounds = Number(button.innerHTML[0]);
        switchPage(selectRounds, playingPage)
    });
});

// Game mechanics
