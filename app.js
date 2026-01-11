let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#message")
let userS = document.querySelector("#user-score")
let compS = document.querySelector("#comp-score")
let reset = document.querySelector("#reset")


const resetFun = () => {
     
    userScore 
    = 0 ;
    compScore = 0 ;
}


const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const radamIdx = Math.floor(Math.random() * 3);
  return options[radamIdx];
};

const showWinner = (userWin , userChoice , compChoice) => {
  if(userWin){
    console.log("You Win!!");
    message.innerText = `You Win!!! ${userChoice} beats ${compChoice}`
    message.style.backgroundColor = "green";
    userScore++;
    userS.innerText = userScore 
  }
  else{
    console.log("You Loose!!");
    message.innerText = `You Loose!!! ${compChoice} beats ${userChoice}`
message.style.backgroundColor = "red";
    
     compScore++;
    compS.innerText = compScore
  }
};

const playGame = (userChoice) => {
  console.log(userChoice);
  let compChoice = getCompChoice();
  console.log(compChoice);

  if (userChoice === compChoice) {
    console.log("The Game Was Draw");
     message.innerText = "Game Was Draw.Play Again!!!"
     message.style.backgroundColor = "#081b31";
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    return showWinner(userWin , userChoice , compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


reset.addEventListener("click", () => {
    userScore = 0;
    userS.innerText = userScore;

    compScore = 0;
    compS.innerText = compScore;

     message.innerText = "Pick Your Move"

})

