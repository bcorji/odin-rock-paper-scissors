console.log('Hello World');

function getComputerChoice() {
  let x = Math.random();
  let choice;

  if (x <= 0.33) {
    choice = 'rock';
  } else if (x <= 0.66) {
    choice = 'paper';
  } else {
    choice = 'scissors';
  }
  return choice;
}



function getHumanChoice() {
  let x = prompt('Enter your choice: ');
  let choice; //= x.toLowerCase();
  if (x == 'rock' || x.toLowerCase() == 'rock') {
    choice = 'rock';
  } else if (x == 'paper' || x.toLowerCase() == 'paper') {
    choice = 'paper';
  } else if (x == 'scissors' || x.toLowerCase() == 'scissors') {
    choice = 'scissors';
  } else {
    alert(
      "Invalid input: You need to enter either 'rock', 'paper', of 'scissors' "
    );
  }
  return choice;
}


function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return 'None';
  }

  const outcomes = {
    rock: { paper: 'human', scissors: 'computer' },
    paper: { rock: 'computer', scissors: 'human' },
    scissors: { rock: 'human', paper: 'computer' }
  };

  return outcomes[computerChoice][humanChoice];
}


console.log(`${winner} won. Game Over.`);
console.log(`Computer: ${computerScore}.\nHuman: ${humanScore}.\n`);

function playGame() {

  let computerChoice = getComputerChoice();
  console.log(computerChoice);
  let humanChoice = getHumanChoice();
  console.log(humanChoice);

  let humanScore = 0;
  let computerScore = 0;

  let winner = playRound(humanChoice, computerChoice);

  if (winner == 'human') {
    humanScore++;
  }
  if (winner == 'computer') {
    computerScore++;
  }

  for (let i = 0; i < 5; i++) {}
}
