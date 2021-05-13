document.addEventListener('click', function(event){
    var target = event.target;

    // Reset Game button do
    if (target.classList.contains("game--restart")){
        location.reload();
    }
    
    let gameContinues = checkResult();
    // Block click do action
    if (target.classList.contains("cell") && target.innerText == "" && gameContinues == false){
        target.innerText = "X";
        opponentMove();
    }
}); 

function opponentMove(){
    let gameContinues = checkResult();
    if (gameContinues == false){
        let randomCell = getArray()[Math.floor(Math.random()*(getArray().length))];
        randomCell.innerText = '0';
        checkResult();
        }
}

function checkResult(check){
    check = false;

    //Winer determination
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

    winningCellCombinations.forEach( combination => 
        {   elementValue1 = getCellValue(combination[0]);
            elementValue2 = getCellValue(combination[1]);
            elementValue3 = getCellValue(combination[2]);

            let isGameCompleted = 
                elementValue1 == elementValue2 
                && elementValue2 == elementValue3
                && elementValue1 != "";

            if (isGameCompleted){
                var gameSattusElement = document.querySelector(".game--status");

                gameSattusElement.innerText = `${elementValue1} has won the game`
                check = true; //Games finishes some one won
                } 
    });

    //Check if there is move to make    
    if(getArray().length == 0 && check == false){ 
        document.querySelector(".game--status").innerText = "DRAW";
        check = true; //Games finishes
        }

    return check;
}

function getArray(cells){
    cells = Array.from(document.getElementsByClassName("cell"));
    return cells.filter(cell => cell.innerText == "");
}

function getCellValue(index) {
    return document.querySelector(`[data-cell-index="${index}"]`).innerText;
}