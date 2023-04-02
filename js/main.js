const sudokuObject = function (difficulty) {
    this.difficulty = difficulty;
    this.populateNumbers = function (difficulty = "easy") {
        // console.log(difficulty)
        switch (difficulty) {
            case "easy":

                break;
            case "medium":
                break;
            case "hard":
                break;

        }
    };
    this.generateBoard = function() {
        for(let i=0;i<9;i++) {
        let rows = document.createElement("aside");
        board.append(rows);   
        }
        let counter=0;

        for( let aside of board.children ) {
            for(let j=0;j<9;j++) {
                let input = document.createElement("input");
                input.id=++counter;
                aside.append(input);

            }  
        }
            // debugger;
            // for(let j=0;j<9;j++) {
            // let box = document.createElement("input");
            // box.value=j;
            // rows.append(box);

            // }

        

    }

}

//easy 36   
//medium 31
//hard 25
//DECLARATIONS
let levelButtons = document.getElementsByClassName("buttons")[0];
let board = document.getElementById("sudoku");

const generateButtons = function () {
    for (let i = 0; i < 3; i++) {
        let button = document.createElement("button");
        button.id = i;
        button.classList.add("hover");
        levelButtons.append(button);
    }
    document.getElementById('0').innerText = 'Easy';
    document.getElementById('1').innerText = 'Medium';
    document.getElementById('2').innerText = 'Hard';

};
generateButtons();
let sudoku = new sudokuObject();
sudoku.generateBoard();

