const sudokuObject = function(difficulty){
    this.difficulty=difficulty;
    this.populateSudoku = function(difficulty) {
    };

}
//DECLARATIONS
let levelButtons = document.getElementsByClassName("buttons")[0];
const generateButtons = function() {
    for(let i=0;i<3;i++){
        let button = document.createElement("button");
        button.id=i;
        levelButtons.append(button);

    }
}
generateButtons();


