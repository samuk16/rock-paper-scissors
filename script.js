
//let playerSelection = prompt("Enter your election");
/*
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
        console.log("tie!");
    } else if (playerSelec == "rock" && computerSelec == "scissors") {
        console.log("You Win! Rock beats scissors");
    } else if (playerSelec == "paper" && computerSelec == "rock") {
        console.log("You Win! paper beats rock");
    } else if (playerSelec == "scissors" && computerSelec == "paper") {
        console.log("You Win! scissors beats paper");
    } else if (playerSelec == "rock" && computerSelec == "paper") {
        console.log("You Lose! paper beats rock");
    } else if (playerSelec == "paper" && computerSelec == "scissors") {
        console.log("You Lose! scissors beats paper");
    } else if (playerSelec == "scissors" && computerSelec == "rock") {
        console.log("You Lose! rock beats scissors");
    } else {
        console.log("Something went horribly wrong...");
    }



}
//playRound(playerSelection.toLowerCase(), computerSelection);

function game() {
    let playerSelection = prompt("Enter your election");
    computerPlay();
    playRound(playerSelection.toLowerCase(), computerSelection);
}

game();
game();
game();

*/


function prueba() {
    let strPrueba = prompt("ingresa Win o Lose");
    let scorePrueba = strPrueba.indexOf("Win");
    return scorePrueba;
}
//console.log(prueba());

let player = 0;
let computer = 0;
function score(playRound) {
    //let strPrueba = prompt("ingresa Win o Lose");

    if (playRound >= 0) {
        player++;
    } else {
        computer++;
    }
    console.log("Player:" + player);
    console.log("Computer:" + computer);
}
score(prueba());
score(prueba());
score(prueba());












