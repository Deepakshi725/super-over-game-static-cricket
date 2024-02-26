let strikeButton = document.getElementById("strike");
let resetButton = document.getElementById("reset");

let scoreTeam1 = document.getElementById("score-team1");
let wicketsTeam1 = document.getElementById("wickets-team1");

let scoreTeam2 = document.getElementById("score-team2");
let wicketsTeam2 = document.getElementById("wickets-team2");

let team1Score = 0;
let team2Score = 0;
let team1wicket = 0;
let team2wicket = 0;

let turn = 1;
let team1Ball = 0;
let team2Ball = 0;

let posibleScore = [0,1,2,3,4,5,6,"W"];

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer")

function updateScore(){
    scoreTeam1.textContent = team1Score;
    wicketsTeam1.textContent = team1wicket;
    scoreTeam2.textContent = team2Score;
    wicketsTeam2.textContent = team2wicket;
}

function GameOver(){
    gameOverAudio();
    if(team1Score>team2Score) alert("Team one wins");
    if(team2Score>team1Score) alert("Team two wins");
    if(team1Score == team2Score) alert("Its a draw");
}

function ResetGame(){
    window.location.reload()
}

resetButton.addEventListener("click",function(){
    ResetGame()
})

function StrikeGame(){
    strikeAudio.play();
    let randomElement = posibleScore[Math.floor(Math.random()*posibleScore.length)]

    if(turn==1){
        team1Ball++;
        document.querySelector(`#team1-superover div nth-child(${team1Ball})`).textContent = randomElement

        if(team1Ball == 6 || team1wicket==2){
            turn = 2;
        }
        if(randomElement=="W"){
            team1wicket++;
        }
        else{
            team1Score+=randomElement;
        }
    }

    
    if(turn==2){
        team1Ball++;
        document.querySelector(`#team2-superover div nth-child(${team2Ball})`).textContent = randomElement

        if(team2Ball == 6 || team2wicket==2 || team2Score>team1Score){
            turn = 3;
            GameOver();
        }
        if(randomElement=="W"){
            team2wicket++;
        }
        else{
            team2Score+=randomElement;
        }
   
    }
    updateScore();
}
strikeButton.addEventListener("click",function(){
    StrikeGame();
})
