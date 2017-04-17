var playerOne = document.querySelector("#p1");
var playerTwo = document.getElementById('p2');
var reset = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var inputNumber = document.querySelector("input");
var highScore = document.getElementById("highScore");
var p1Score = 0;
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

function resetFunc(){
    p1Score = 0;
    p1Display.textContent = p1Score;
    p2Score = 0;
    p2Display.textContent = p2Score;
    gameOver = false;
    p1Display.classList.remove('winner');
    p2Display.classList.remove('winner');
};

playerOne.addEventListener("click", function(){
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add('winner');
            gameOver = true;
        }
    }
    p1Display.textContent = p1Score;
});
playerTwo.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add('winner');
            gameOver = true;
        }
    }
    p2Display.textContent = p2Score;
});
reset.addEventListener("click", function(){
    resetFunc();
});
inputNumber.addEventListener("change", function(){
    highScore.textContent = this.value
    winningScore = Number(this.value)
    resetFunc();
});
