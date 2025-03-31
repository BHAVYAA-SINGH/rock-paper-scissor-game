let score=JSON.parse(localStorage.getItem('score')) ||  {
    wins: 0,
    losses: 0,
    ties: 0
};


/* console.log(JSON.parse(localStorage.getItem('score'))); */

updateScoreElement();

function playGame(playerMove) {
    const computerMove = pickComputerMoves();
    let result = '';
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') result = 'You loose';
        else if (computerMove === 'paper') result = 'You win';
        else result = 'Tie';
    }
    else if (playerMove ==='paper') {
        if (computerMove === 'rock') result = 'You win';
        else if (computerMove === 'paper') result = 'Tie';
        else result = 'You loose';
    }
    else {
        if (computerMove === 'rock') result = 'tie';
        else if (computerMove === 'paper') result = 'You loose';
        else result = 'You win';
    }

    if(result==='You win')
        score.wins++;
    else if(result==='You loose')
        score.losses++;
    else 
        score.ties++;

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML=`You
 <img class="move-icon" src="${playerMove}-emoji.png" alt="">
<img class="move-icon" src="${computerMove}-emoji.png" alt="">
Computer`;
    
}

function updateScoreElement(){
    document.querySelector('.js-score')
.innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}

function pickComputerMoves() {
    let computerMove = '';
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) computerMove = 'rock';
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) computerMove = 'paper';
    else computerMove = 'scissors';
    return computerMove;
}
