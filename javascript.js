//Choices availables
const choices = ["rock","paper","scissors"];

//Get computer selection


function getComputerChoice(){
    let numberChoice = Math.floor(Math.random()*choices.length)
    numberChoice = choices.slice(numberChoice,numberChoice+1)
    return numberChoice.toString()
}

//Get player selection


function getPlayerChoice(){
    let playerChoice = prompt("Please choise one of the options: Rock, Paper or Scissors");
    console.log(playerChoice);
    if (playerChoice === null){
        playerChoice = prompt("Please choise one of the options: Rock, Paper or Scissors");
    } else {
        playerChoice = playerChoice.toLowerCase();
    }
    return playerChoice;
}

//Compare both selection e return the winner of the round
function winnerRound (){

    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let winnerRound;

    if (playerSelection === "rock" && computerSelection === "scissors"){
        winnerRound = "Player";
        alert("You win! Rock beats Scissors");
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        winnerRound = "Computer";
        alert("You lose! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        winnerRound = "Player";
        alert("You win! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        winnerRound = "Computer";
        alert("You lose! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        winnerRound = "Computer";
        alert("You lose! Rock beats Scissors");
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        winnerRound = "Player";
        alert("You win! Scissors beats Paper");
    } else if (playerSelection === computerSelection){
        winnerRound = "Tie";
        alert("It's a tie!");
    }
    return winnerRound;
}

//Restart the round until a player or computer has wan 3 times
function newGame(){
    let computerScore = 0;
    let playerScore = 0;

    while (3 > computerScore && 3 > playerScore){
        let winner = winnerRound();
        if (winner==="Player"){
            ++playerScore;
            alert(`Computer ${computerScore} x ${playerScore} You`);
        }else if(winner==="Computer"){
            ++computerScore;
            alert(`Computer ${computerScore} x ${playerScore} You`)
        }
    }
    return alert(`Computer ${computerScore} x ${playerScore} You`)
}

//Starts the game
newGame()
