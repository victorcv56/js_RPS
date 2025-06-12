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
function startGame(hChoice) 
{
    let flag = true;

    while (flag) 
    {
        let cChoice = getComputerChoice();
        // let hChoice = hChoice; //changed to input from outside
        console.log(`User threw ${hChoice}.\nComputer threw ${cChoice}.`)
        
        if (hChoice == 'rock') 
        {
            if (cChoice == 'scissors') {
                uScore += 1;
                console.log("user wins");
            }
            else if (cChoice == 'paper') {
                cScore += 1;
                console.log("computer wins");
            }
            else console.log('draw!');
            flag = false;

        }

        if (hChoice == 'paper') 
        {
            if (cChoice == 'rock') 
            {
                uScore += 1;
                console.log("user wins");
                
            }
            else if (cChoice == 'scissors') 
            {
                cScore += 1;
                console.log("computer wins");
            }
            else console.log('draw!');
            flag = false;
        }
        
        if (hChoice == 'scissors') 
        {
            if (cChoice == 'paper') 
            {
                uScore += 1;
                console.log("user wins");
            }
            else if (cChoice == 'rock') 
            {
                cScore += 1;
                console.log("computer wins");
            }
            else console.log('draw!');
            flag = false;
        }
        // console.log(``)
        console.log(`uScore = ${uScore} \ncScore = ${cScore}`)
        
        // if (uScore >= 3 || cScore >= 3) 
        //     flag = false;

    }
}

const rButton = document.querySelector("#rock");
const pButton = document.querySelector(".paper");
const sButton = document.querySelector(".scissors");
// const hChoice = '';
//Will not change the string to what i need it to

rButton.addEventListener("click", () => {
    const hChoice = "rock";   
    startGame(hChoice);
});

pButton.addEventListener("click", () => {
    const hChoice = "paper";   
    startGame(hChoice);
});

sButton.addEventListener("click", () => {
    const hChoice = "scissors";   
    startGame(hChoice);
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

// Random number within a range formula: 

// const getRandomNumner = (min, max) {
//     return Math.random() * (max - min) + min
// }
