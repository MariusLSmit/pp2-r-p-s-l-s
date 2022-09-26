const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

//Event listeners for buttons to loop through
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    })
}

//Main game function

function playGame(playerChoice){

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    
    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);
}

//Finds the winner