let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

/* COMPUTER CHOICE */

const genComputerChoice = () => {

    const options = ["rock", "paper", "scissors"];

    const randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];
};

/* DRAW GAME */

const drawGame = () => {

    msg.innerText = "🤝 It's a Draw!";

    msg.style.color = "#ffffff";
};

/* SHOW WINNER */

const showWinner = (userWin, userChoice, compChoice) => {

    if(userWin){

        userScore++;

        userScorePara.innerText = userScore;

        msg.innerText =
        `🎉 You Win! ${userChoice} beats ${compChoice}`;

        msg.style.color = "#22c55e";

    } else {

        compScore++;

        compScorePara.innerText = compScore;

        msg.innerText =
        `😢 You Lost! ${compChoice} beats ${userChoice}`;

        msg.style.color = "#ef4444";
    }
};

/* MAIN GAME LOGIC */

const playGame = (userChoice) => {

    const compChoice = genComputerChoice();

    if(userChoice === compChoice){

        drawGame();

    } else {

        let userWin = true;

        if(userChoice === "rock"){

            userWin =
            compChoice === "paper" ? false : true;

        } else if(userChoice === "paper"){

            userWin =
            compChoice === "scissors" ? false : true;

        } else {

            userWin =
            compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

/* CLICK EVENTS */

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice =
        choice.getAttribute("id");

        playGame(userChoice);
    });
});