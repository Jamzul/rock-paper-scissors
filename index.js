function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return 'Rock';
    }
    else if (num === 3) {
        return 'Scissors';
    }
    else (num === 2) 
        return 'Paper';
    

}
console.log(getComputerChoice());
