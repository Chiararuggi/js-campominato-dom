let cellDifficultyEasy= 100;
let cellDifficultyMedium= 81;
let cellDifficultyHard= 49;


function getRndNumber(_difficulty) {
    return Math.floor((Math.random() * _difficulty) + 1);
};

function getDifficulty(){
    const difficulty = parseInt(document.getElementById("diffSelector").value);
    return difficulty;
}

function createCell(cellAmount){
    grid.innerHTML = "";
    for (let i = 1; i <= cellAmount; i++) {
        let cell = createSquare(i);
        let grid = document.getElementById("grid");
        grid.appendChild(cell);
    }
};

function createSquare(squareAmount){
    const cell = document.createElement("div");
    cell.classList.add("square");
    cell.innerHTML += squareAmount;
    cell.addEventListener("click", function() {

        console.log("Clicked cell", squareAmount);
    });
    return cell;
};

function getBadCell(_badCell){
    const badCell = [];
    for (let i = 1; i <= 16; i++){
        badCell.push(getRndNumber(_badCell));
    }
    return badCell;
}


document.getElementById("playButton").addEventListener("click", function(){
    let difficulty = getDifficulty();

    if (difficulty == 1) {
        createCell(cellDifficultyEasy);
        let ciccio = getBadCell(cellDifficultyEasy);
        console.log(ciccio);
    } else if (difficulty == 2) {
        createCell(cellDifficultyMedium);
    } else if (difficulty == 3) {
        createCell(cellDifficultyHard);
    }
});
