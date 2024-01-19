//Choices availables
const choices = ["rock","paper","scissors"];

//Get computer selection


function getComputerChoice(){
    let numberChoice = Math.floor(Math.random()*3)
    numberChoice = choices.slice(numberChoice,numberChoice+1)
    return numberChoice.toString()
}

//Get player selection


function getPlayerChoice(){
    let playerChoice = prompt("Please choise one of the options: Rock, Paper or Scissors");
    return playerChoice.toLowerCase();   
}

//Compare both selection e return the winner of the round
function winnerRound (){

    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    let winnerRound;

    if (playerSelection === "rock" && computerSelection === "scissors"){
        winnerRound = "Player";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        winnerRound = "Computer";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        winnerRound = "Player";
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        winnerRound = "Computer";
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        winnerRound = "Computer";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        winnerRound = "Player";
    } else if (playerSelection === computerSelection){
        winnerRound = "Tie";
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
            alert("You win this round!");
        }else if(winner==="Computer"){
            ++computerScore;
            alert("You lost this round!");
        }
    }
    return alert(`Computer ${computerScore} x ${playerScore} You`)
}


//Declare the winner of the game