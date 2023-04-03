const sudokuObject = function (difficulty) {
    this.difficulty = difficulty;
    this.generateSolution = function (difficulty = "easy") {
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
        button.id = `button-${i}`;
        button.classList.add("hover");
        levelButtons.append(button);
    }
    document.getElementById('button-0').innerText = 'Easy';
    document.getElementById('button-1').innerText = 'Medium';
    document.getElementById('button-2').innerText = 'Hard';

};
generateButtons();
let sudoku = new sudokuObject();
sudoku.generateBoard();

