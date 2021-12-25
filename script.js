
let playerSelection = prompt("Enter your election");

const randomSelec = ["a", "rock", "paper", "scissors"];
let computerSelection;
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    computerSelection = randomSelec[randomNumber];
    return computerSelection;

}
console.log(computerPlay())

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
playRound(playerSelection.toLowerCase(), computerSelection);


/*
let a = "rock";
let b = "hola";
if (a == b) {
    console.log("tie!");
} else if (a == "rock" && b == "scissors") {
    console.log("You Win! Rock beats scissors");
} else if (a == "paper" && b == "rock") {
    console.log("You Win! paper beats rock");
} else if (a == "scissors" && b == "paper") {
    console.log("You Win! scissors beats paper");
} else if (a == "rock" && b == "paper") {
    console.log("You Lose! paper beats rock");
} else if (a == "paper" && b == "scissors") {
    console.log("You Lose! scissors beats paper");
} else if (a == "scissors" && b == "rock") {
    console.log("You Lose! rock beats scissors");
} else {
    console.log("Something went horribly wrong...");
}

*/





/*
let a = "paper";
let b = "rock";
switch (a, b) {
    case "rock", "rock":
        console.log("tie!");
        break;
    case "scissors", "scissors":
        console.log("tie!");
        break;
    case "paper", "paper":
        console.log("tie!");
        break;
    case "rock", "scissors":
        console.log("You Win! rock beats scissors");
        break;
    case "paper", "rock":
        console.log("You Win! paper beats rock");
        break;
    case "scissors" && "paper":
        console.log("You Win! scissors beats paper");
        break;
    case "rock" && "paper":
        console.log("You Lose! paper beats rock");
        break;
    case "paper" && "scissors":
        console.log("You Lose! scissors beats paper");
        break;
    case "scissors" && "rock":
        console.log("You Lose! rock beats scissors");
        break;
    default:
        console.log("Something went horribly wrong...");
}

*/