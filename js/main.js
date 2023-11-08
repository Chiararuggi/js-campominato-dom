let cellDifficultyEasy= 100;
let cellDifficultyMedium= 81;
let cellDifficultyHard= 49;
let ciccio = [];


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
            if(ciccio.includes(squareAmount)){
                cell.classList.add("squareRed");
                alert("HAI PERSOO!!!");
                createCell();
            }
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
        ciccio = getBadCell(cellDifficultyEasy);
        createCell(cellDifficultyEasy);
        console.log(ciccio);
    } else if (difficulty == 2) {
        ciccio = getBadCell(cellDifficultyMedium);
        createCell(cellDifficultyMedium);
        console.log(ciccio);
    } else if (difficulty == 3) {
        ciccio = getBadCell(cellDifficultyHard);
        createCell(cellDifficultyHard);
        console.log(ciccio);
    }
});
