let userScore = 0;
let computerScore = 0;
const userscore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userscore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice + ". You Win!"
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userscore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " loses to " + computerChoice + ". You lost!"
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = userChoice + " and " + computerChoice + ". It's a tie!"
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

game();

function main() {
    rock_div.addEventListener('click', function () {
        game("rock")
    });

    paper_div.addEventListener('click', function () {
        game("paper")
    });

    scissors_div.addEventListener('click', function () {
        game("scissors")
    });

}
main();