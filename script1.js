let Allimg=document.querySelectorAll('.imagecontainer img');

let userChoice;
let compChoice;

let userScore=0;
let compScore=0;

function compChoicefunc(){
    let arr=["rock","paper","scissor"];
    let indexarr=Math.floor(Math.random()*3);
    compChoice=arr[indexarr];
    return compChoice;
}
function gameimplementation(uchoice){
    compChoice=compChoicefunc();


    // alert(`User selected : ${uchoice} and Computer Selected ${compChoice}`)
    document.getElementById('displaypara').innerHTML=`User selected : ${uchoice} and Computer Selected ${compChoice}`;


    if(compChoice===userChoice ){
        btn.innerHTML="Game Draw!!"
        Round--;
    }
    else if(compChoice==='rock' && userChoice==='scissor'){
        btn.innerHTML="Comp Won!!"
        compScore++;
        compScore.innerHTML=compScore;
        Round--;

    }
    else if(compChoice==='scissor' && userChoice==='rock'){
        btn.innerHTML="User Won!!"
        userScore++;
        userscore.innerHTML=userScore;
        Round--;
    }
    else if(compChoice==='paper' && userChoice==='rock'){
        btn.innerHTML="Comp Won!!"
        compScore++;
        compScore.innerHTML=compScore;
        Round--;
    }
    else if(compChoice==='rock' && userChoice==='paper'){
        btn.innerHTML="User Won!!"
        userScore++;
        userscore.innerHTML=userScore;
        Round--;

    }
    else if(compChoice==='scissor' && userChoice==='paper'){
        btn.innerHTML="Comp Won!!"
        compScore++;
        compscore.innerHTML=compScore;
        Round--;
    }
    else if(compChoice==='paper' && userChoice==='scissor'){
        btn.innerHTML="User Won!!"
        userScore++;
        userscore.innerHTML=userScore;
        Round--;

    }
    else{
        btn.innerHTML="Invalid !!"

    }
}

Allimg.forEach((i)=>{
    i.addEventListener('click',()=>{
        userChoice=i.id;
        gameimplementation(userChoice)
       
    })
})

