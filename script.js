document.addEventListener('click', function(event){
    var target = event.target
    console.log(target);
    markX(target);
}); 

function markX(element){
    if (element.classList.contains("cell") && element.innerText == ""){
        element.innerText = "X";
        opponentMove();
    }

}

function opponentMove(){

    let elements = Array.from(document.querySelectorAll(".cell"));
    elements = elements.filter(function(el){
        return el.innerText == ""
    });

    let randomNo = randomInteger(0, elements.length);

    let selectedElement = elements[randomNo];

    selectedElement.innerText = "0";

}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


