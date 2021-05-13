document.addEventListener('click', function(event){
    var target = event.target
    markX(target);
}); 

function markX(element){
    let gameContinues = checkResult();
    if (element.classList.contains("cell") && element.innerText == "" && gameContinues == false ){
        element.innerText = "X";

        let gameContinues = checkResult();
        if (gameContinues == false){
            checkResult();
            opponentMove();
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
    return WinnerDetermined() || noMovesLeft();
}

function noMovesLeft(){
    var cells = Array.from(document.getElementsByClassName("cell"));
    cells = cells.filter(cell => cell.innerText == "");

    if (cells.length == 0){
        document.querySelector(".game--status").innerText = "DRAW";
        return true; //Games finishes
    }
    return false; //Game continues
}


function WinnerDetermined(){
    let winningCellCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (let i = 0; i < winningCellCombinations.length; i++) {
        const combination = winningCellCombinations[i];
        
            elementValue1 = getCellValue(combination[0]);
            elementValue2 = getCellValue(combination[1]);
            elementValue3 = getCellValue(combination[2]);

            let isGameCompleted = 
            elementValue1 == elementValue2 
            && elementValue2 == elementValue3
            && elementValue1 != "";

            if (isGameCompleted){
                var gameSattusElement = document.querySelector(".game--status");

                gameSattusElement.innerText = `${elementValue1} has won the game`
                return true;
            }

        return false;
    }
}


function getCellValue(index) {
    return document.querySelector(`[data-cell-index="${index}"]`).innerText;
}