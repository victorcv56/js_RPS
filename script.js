// Function to get computer choice of RPS
function getComputerChoice() 
{
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    let num = getRandomNumber(1, 10);
    let choice = '';

    // console.log(num);
    if (num < 3 + 1) choice += 'Rock';
    else if (num > 3  && num < 6 + 1) choice += 'Paper';
    else if (num > 6 ) choice += 'Scissors';
    
    return choice.toLowerCase();
}

//Start game of RPS

// function restartGame()
// {
//     window.location.reload();
// }

function startGame(uChoice)
{
    // get computer choice from outside function
    let cChoice = getComputerChoice();
    // message of choices made by user and computer
    const choiceMsg = `User threw ${uChoice}. \nComputer threw ${cChoice}.`

    const userScore = document.querySelector('#uScore');
    const compScore = document.querySelector('#cScore');
    const choice = document.querySelector(".choice-made");
    const result = document.querySelector(".result-message");

    // displays choices made by user and computer message on screen
    choice.textContent = choiceMsg;
    
    // if else blocks to determine winner of round
    if (uChoice == 'rock') 
    {
        if (cChoice == 'scissors') {
            uScore += 1;
            userScore.textContent = uScore;
            result.textContent = "User wins";
        }
        else if (cChoice == 'paper') {
            cScore += 1;
            compScore.textContent = cScore;
            result.textContent = "Computer wins";
        }
        else result.textContent = "Draw!";
        flag = false;
    }

    if (uChoice == 'paper') 
    {
        if (cChoice == 'rock') {
            uScore += 1;
            userScore.textContent = uScore;
            result.textContent = "User wins";
        }
        else if (cChoice == 'scissors') {
            cScore += 1;
            compScore.textContent = cScore;
            result.textContent = "Computer wins";
        }
        else result.textContent = "Draw!";
        flag = false;
    }

    if (uChoice == 'scissors') 
    {
        if (cChoice == 'paper') {
            uScore += 1;
            userScore.textContent = uScore;
            result.textContent = "User wins";
        }
        else if (cChoice == 'rock') {
            cScore += 1;
            compScore.textContent = cScore;
            result.textContent = "Computer wins";
        }
        else result.textContent = "Draw!";
        flag = false;
    }

    // checks to see who reached max score
    gameResult(uScore, cScore);

} // End StartGame function

function gameResult(uScore, cScore)
{
    const winnerMsg = document.querySelector(".endgame-message");
    if (uScore == 5)
    {   
        winnerMsg.textContent = "User Won Game!!" 
        // prompt("Play again?"); // trying to see if i can prompt buttons
    }   
    else if (cScore == 5)
    {
        winnerMsg.textContent = "Computer Won Game!!";
        // prompt("Play again?");
    }
    

}


const rButton = document.querySelector(".rock");
const pButton = document.querySelector(".paper");
const sButton = document.querySelector(".scissors");

rButton.addEventListener("click", () => {
    const uChoice = "rock";   
    startGame(uChoice);
});

pButton.addEventListener("click", () => {
    const uChoice = "paper";   
    startGame(uChoice);
});

sButton.addEventListener("click", () => {
    const uChoice = "scissors";   
    startGame(uChoice);
});

let uScore = 0;
let cScore = 0;


/*
computer choice code is: 
- if random number lands between 1-3 computer choooses rock
- if number lands between 4-6 computer throws paper
- if number lands between 7-9 computer throws scissors

Another thing to consider is math.random() gives us a number
between 0-1 which we can convert to whole numbers if i multiply
by 10, but i need to stop at 9..
*/