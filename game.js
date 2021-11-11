let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


const getComputerChoice = () => {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// console.log(getComputerChoice());
const game = (userChoice) => {
    // console.log(userChoice);
    const computerChoice = getComputerChoice();
    // console.log('user choice => ' + userChoice);
    // console.log('computer choice => ' + computerChoice);
    switch (userChoice + computerChoice){
    case 'rp':
     case 'pr':
     case 'sp':
    //  console.log('USER WINS.');
    win(userChoice, computerChoice);
     break;
     case 'rs':
     case 'ps':
     case 'sr':
    //  console.log('USER LOSES.');
    lost(userChoice, computerChoice);
     break;
     case 'rr':
     case 'pp':
     case 'ss':
    //  console.log('its a draw.');
    draw(userChoice, computerChoice);
     break;
    }
}

const win =(user, computer) => {
    // console.log('you won');
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const user1 = 'user'.fontsize(3).sub();
    const comp1 = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(user);

    result_div.innerHTML = `${convertLetter(user)}${user1} beats ${convertLetter(computer)}${comp1} YOU WIN`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300);
}

const lost = (user, computer) => {
    // console.log('you lost');
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTMLS = computerScore;
    const user1 = 'user'.fontsize(3).sub();
    const comp1 = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(user);

    result_div.innerHTML = `${convertLetter(user)}${user1} beats ${convertLetter(computer)}${comp1} YOU LOST`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 300);
}

const draw = (user, computer) => {
    // console.log('you draw');
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTMLS = computerScore;
    const user1 = 'user'.fontsize(3).sub();
    const comp1 = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(user);

    result_div.innerHTML = `${convertLetter(user)}${user1} beats ${convertLetter(computer)}${comp1} YOU DRAW`;
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function() {userChoice_div.classList.remove('gray-glow')}, 300);
}

const convertLetter = (letter) => {
    if(letter === 'r') return 'ADA';
    if (letter === 'p') return 'SULE';
    return 'GBENGA';
}
const main = () => {
rock_div.addEventListener('click', () => {
    // console.log('hey you clicked on rock');
    game('r');
})
paper_div.addEventListener('click', () => {
    // console.log('hey you clicked on paper');
    game('p');
})
scissors_div.addEventListener('click', () => {
    // console.log('hey you clicked on scissors');
    game('s');
})
}
main();
