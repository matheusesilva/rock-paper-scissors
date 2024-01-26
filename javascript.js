const startButton = document.querySelector('#startButton');
const gameArea = document.querySelector('.gameArea');
const container = document.querySelector('.container');

const choices = ['Rock','Paper','Scissors'];
let playerChoice = '';
let computerChoice ='';
let computerPoints = 0;
let playerPoints = 0;

startButton.addEventListener('click',function (){
    startButton.remove();
    getPlayerChoice();
    setButtonFinish();
});

function getPlayerChoice (){
    const text = document.createElement('p');
    text.textContent = 'Choose one:'
    gameArea.appendChild(text);
    const list = document.createElement('ul');
    choices.forEach(item => {
        const choice = document.createElement('li');
        const buttonChoice = document.createElement('button');
        buttonChoice.setAttribute('id','buttonChoice');
        buttonChoice.textContent = item;
        buttonChoice.addEventListener('click',function (){
            playerChoice = item;
            startRound();
        });
        choice.appendChild(buttonChoice);
        list.appendChild(choice);
    });
    gameArea.appendChild(list);
}

function setButtonFinish (){
    const buttonFinish = document.createElement('button')
    buttonFinish.setAttribute('id','buttonFinish');
    buttonFinish.textContent = 'Finish Game';
    container.appendChild(buttonFinish);
    buttonFinish.addEventListener('click',function(){
        location.reload();
    })
}

function startRound(){
    const list = document.querySelector('.gameArea ul');
    list.remove();
    const message = document.querySelector('.gameArea p');
    message.textContent = getResult();
    const images = document.createElement('div');
    const imgPlayer = new Image();
    imgPlayer.src = `./img/${playerChoice}-left.png`;
    images.appendChild(imgPlayer);
    const imgComputer = new Image();
    imgComputer.src = `./img/${computerChoice}-right.png`;
    images.appendChild(imgComputer);
    gameArea.appendChild(images);
    const score = document.querySelector('p');
    score.textContent = `You ${playerPoints} x ${computerPoints} Computer`;
    setTimeout(function(){
        if (playerPoints >= 5){
            message.textContent = 'You\'re the champion!';
            images.removeChild(imgComputer);
            images.removeChild(imgPlayer);
            const imgChampion = new Image();
            imgChampion.src = './img/trophy.png';
            imgChampion.setAttribute('id','imgResult');
            images.appendChild(imgChampion);
        } else if (computerPoints >= 5){
            message.textContent = 'What a pity, you lost!';
            images.removeChild(imgComputer);
            images.removeChild(imgPlayer);
            const imgLoser = new Image();
            imgLoser.src = './img/loser.png';
            imgLoser.setAttribute('id','imgResult');
            images.appendChild(imgLoser);
        } else {
            getPlayerChoice();
            images.remove();
            message.remove();
        }

    },2000)
}

function getComputerChoice(){
    computerChoice = choices[Math.floor(Math.random()*choices.length)]
    return computerChoice
}

function getResult(){
    result = '';
    computerChoice = getComputerChoice();
    if ((computerChoice === 'Rock'&& playerChoice === 'Scissors')
    || (computerChoice === 'Paper' && playerChoice === 'Rock')
    || (computerChoice === 'Scissors' && playerChoice === 'Paper')){
        ++computerPoints;
        result = 'You lost!';
    } else if(computerChoice === playerChoice){
        result = 'It\'s a tie!'
    } else {
        ++playerPoints;
        result = 'You win!';
    }
    return result
}
