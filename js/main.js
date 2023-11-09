let cellDifficultyEasy= 100;
let cellDifficultyMedium= 81;
let cellDifficultyHard= 49;
let badCellArray = [];
let score= 0;


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

function checkForScore(squareAmount,cell){
    for(let i = 0; i < badCellArray.length; i++){
        if(badCellArray[i] == squareAmount){
            cell.classList.add("squareRed");
            alert("HAI PERSOO!!!");
            createCell();
        }else {
            score += 1;
            cell.classList.add("squareHightlight");
            document.getElementById("message").innerHTML = "Il tuo punteggio è " + score;
            break;
        }

    }

}

function createSquare(squareAmount){
    const cell = document.createElement("div");
    cell.classList.add("square");
    cell.innerHTML += squareAmount;
    cell.addEventListener("click", function() {
        checkForScore(squareAmount,cell);
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
    score = 0;

    if (difficulty == 1) {
        badCellArray = getBadCell(cellDifficultyEasy);
        createCell(cellDifficultyEasy);
        console.log(badCellArray);
    } else if (difficulty == 2) {
        badCellArray = getBadCell(cellDifficultyMedium);
        createCell(cellDifficultyMedium);
        console.log(badCellArray);
    } else if (difficulty == 3) {
        badCellArray = getBadCell(cellDifficultyHard);
        createCell(cellDifficultyHard);
        console.log(badCellArray);
    }
});
