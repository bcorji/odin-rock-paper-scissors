console.log("Hello World")

function getComputerChoice(){
    let x = Math.random();
    let choice;

    if (x <= 0.33){
        choice = "rock"
    }else if (x <= 0.66){
        choice = "paper"
    }else{
        choice = "scissors"
    }
    return choice;
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

function getHumanChoice(){
    let x = prompt("Enter your choice: ");
    let choice;
    if (x == "rock" || x.toLowerCase() == "rock"){
        choice = "rock";
    }else if (x == "paper" || x.toLowerCase() == "paper"){
        choice = "paper";
    }else if (x == "scissors" || x.toLowerCase() == "scissors"){
        choice = "scissors";
    }else {
        alert("Invalid input: You need to enter either 'rock', 'paper', of 'scissors' ");
    }
    return choice;
}

let humanChoice = getHumanChoice();
console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let winner;
    if (computerChoice == "rock"){
        if (humanChoice == "rock"){
            winner = "None"
        }else if (humanChoice == "paper"){
            winner = "human"
        }else {
            winner = "computer"
        }
    }
    if (computerChoice == "paper"){
        if (humanChoice == "rock"){
            winner = "computer"
        }else if (humanChoice == "paper"){
            winner = "None"
        }else {
            winner = "human"
        }
    }
    if (computerChoice == "scissors"){
        if (humanChoice == "rock"){
            winner = "human"
        }else if (humanChoice == "paper"){
            winner = "computer"
        }else {
            winner = "None"
        }
    }
    return winner;
}

let winner = playRound(humanChoice, computerChoice);

if (winner == "human"){
    humanScore ++
}
if (winner == "computer"){
    computerScore ++
}


console.log(`${winner} won. Game Over.`)
console.log(`Computer: ${computerScore}.\nHuman: ${humanScore}.\n`);

function playGame(){
    for (let i = 0; i < 5; i++){
        
    }
}