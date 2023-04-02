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
        button.classList.add("hover");
        levelButtons.append(button);
    }
    document.getElementById('0').innerText = 'Easy';
    document.getElementById('1').innerText = 'Medium';
    document.getElementById('2').innerText = 'Hard';

};
generateButtons();


