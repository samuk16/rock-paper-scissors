
//let playerSelection = prompt("Enter your election");

const randomSelec = ["a", "rock", "paper", "scissors"];
let computerSelection;
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    computerSelection = randomSelec[randomNumber];
    return computerSelection;

}
//console.log(computerPlay())

function playRound(playerSelec, computerSelec) {
    if (playerSelec == computerSelec) {
        return console.log("tie!");
    } else if (playerSelec == "rock" && computerSelec == "scissors") {
        return console.log("You Win! Rock beats scissors");
    } else if (playerSelec == "paper" && computerSelec == "rock") {
        return console.log("You Win! paper beats rock");
    } else if (playerSelec == "scissors" && computerSelec == "paper") {
        return console.log("You Win! scissors beats paper");
    } else if (playerSelec == "rock" && computerSelec == "paper") {
        return console.log("You Lose! paper beats rock");
    } else if (playerSelec == "paper" && computerSelec == "scissors") {
        return console.log("You Lose! scissors beats paper");
    } else if (playerSelec == "scissors" && computerSelec == "rock") {
        return console.log("You Lose! rock beats scissors");
    } else {
        return console.log("Something went horribly wrong...");
    }



}
//playRound(playerSelection.toLowerCase(), computerSelection);
let player = 0;
let computer = 0;

function nashe(playerSelec, computerSelec){
    if (playerSelec == computerSelec) {
        
    } else if (playerSelec == "rock" && computerSelec == "scissors") {
        player++;
    } else if (playerSelec == "paper" && computerSelec == "rock") {
        player++;
    } else if (playerSelec == "scissors" && computerSelec == "paper") {
        player++;
    } else if (playerSelec == "rock" && computerSelec == "paper") {
        computer++;
    } else if (playerSelec == "paper" && computerSelec == "scissors") {
        computer++;
    } else if (playerSelec == "scissors" && computerSelec == "rock") {
        computer++;
    }else {
        return console.log("Something went horribly wrong...");
    }
    console.log("Player:" + player);
    console.log("Computer:" + computer);

    
}
function resultGame(){
    if(player>computer){
        console.log("You Win!😎")
    }else if(computer>player){
        console.log("You Lose!😥")
    }else{
        console.log("Tie!😯")
    }
}



function game() {
    let playerSelection = prompt("Enter your election");
    computerPlay();
    playRound(playerSelection.toLowerCase(), computerSelection);
    nashe(playerSelection.toLowerCase(), computerSelection);
}

game();
game();
game();
game();
game();
resultGame();







