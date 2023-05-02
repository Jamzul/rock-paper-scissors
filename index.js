function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return 'rock';
    }
    else if (num === 3) {
        return 'scissors';
    }
    else (num === 2) 
        return 'paper';
}





function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie';
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        return 'You Win, paper beats rock!';
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        return 'You Win, rock beats scissors!';
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
        return 'You win, scissors beats paper!';
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        return 'You lose, paper beats rock';
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
        return 'You lose, rock beats scissors';
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
        return 'You lose, scissors beats paper';
    }

} 

const computerSelection = getComputerChoice();
const userInput = prompt('Please type either Rock, Paper or Scissors');
const playerSelection = userInput.toLowerCase();
console.log(computerSelection);
console.log(playGame(playerSelection, computerSelection));




