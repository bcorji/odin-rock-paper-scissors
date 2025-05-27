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
    scissors: { rock: 'human', paper: 'computer' },
  };

  return outcomes[computerChoice][humanChoice];
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`\n--- Round ${i} ---`);

    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    
    console.log(`Computer choice: ${computerChoice}`);
    console.log(`Human choice: ${humanChoice}`);

    const winner = playRound(humanChoice, computerChoice);

    if (winner === 'human') {
      humanScore++;
      console.log('You won this round!');
    } else if (winner === 'computer') {
      computerScore++;
      console.log('Computer won this round!');
    } else {
      console.log("It's a tie!");
    }

    console.log(`Current Score -> Human: ${humanScore}, Computer: ${computerScore}\n`);

    // Delay  between rounds
    await sleep(3000);
  }

  console.log('\n--- Game Over ---');
  if (humanScore > computerScore) {
    console.log('🎉 You win the game!');
  } else if (computerScore > humanScore) {
    console.log('💻 Computer wins the game!');
  } else {
    console.log('🤝 The game is a tie!');
  }
}


async function startGame() {
  console.log('Starting the game...');
  await sleep(3000);
  playGame();
}
// Call the startGame function to initiate the game
startGame();
