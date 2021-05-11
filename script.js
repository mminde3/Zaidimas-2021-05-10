document.addEventListener('click', function(event){
    var target = event.target
    markX(target);
}); 

function markX(element){
    if (element.classList.contains("cell") && element.innerText == ""){
        element.innerText = "X";

        let gameContinues = checkResult();
        if (gameContinues){
            opponentMove();
            checkResult();
        }
    }

}

function opponentMove(){

    var cells = Array.from(document.getElementsByClassName("cell"));
    cells = cells.filter(cell => cell.innerText == "");

    let randomNumber = randomInteger(0, cells.length);

    let randomCell = cells[randomNumber];

    randomCell.innerText = '0';
    
}

function randomInteger(min, max) {
    const r = Math.random()*(max-min) + min;
    return Math.floor(r);
  }

function checkResult(){
    WinnerDetermined();
    return anyMovesLeft();
}

function anyMovesLeft(){
    var cells = Array.from(document.getElementsByClassName("cell"));
    cells = cells.filter(cell => cell.innerText == "");

    if (cells.length == 0){
        document.querySelector(".game--status").innerText = "DRAW";
        return false; //Games finishes
    }
    return true; //Game continues
}


function WinnerDetermined(){
    let winningCellCombinations = [
        [0,1,3],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [3,5,7]
    ]

}
