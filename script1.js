let Allimg = document.querySelectorAll('.imagecontainer img');
let userChoice;
let compChoice;
let userScore = 0;
let compScore = 0;
let btn = document.getElementById('btn');
let userScoreEl = document.getElementById('userscore');
let compScoreEl = document.getElementById('compscore');

function compChoicefunc() {
    let arr = ["rock", "paper", "scissor"];
    let indexarr = Math.floor(Math.random() * 3);
    return arr[indexarr];
}

function gameimplementation(uchoice) {
    compChoice = compChoicefunc();

    document.getElementById('displaypara').innerHTML =
        `User selected : ${uchoice} and Computer Selected ${compChoice}`;

    if (compChoice === uchoice) {
        btn.innerHTML = "Game Draw!!";
    }
    else if (
        (compChoice === 'rock'    && uchoice === 'scissor') ||
        (compChoice === 'paper'   && uchoice === 'rock')    ||
        (compChoice === 'scissor' && uchoice === 'paper')
    ) {
        btn.innerHTML = "Comp Won!!";
        compScore++;
        compScoreEl.innerHTML = compScore;
    }
    else {
        btn.innerHTML = "User Won!!";
        userScore++;
        userScoreEl.innerHTML = userScore;
    }
}

Allimg.forEach((i) => {
    i.addEventListener('click', () => {
        userChoice = i.id;
        gameimplementation(userChoice);
    });
});