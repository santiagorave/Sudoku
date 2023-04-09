const sudokuObject = function (difficulty) {
    this.difficulty = difficulty;
    this.generateSolution = function (difficulty = "easy") {
        let array2d=[];
        let inputs = document.getElementsByTagName("input");
        // console.log(inputs[0].value);
        for(let k=0;k<9;k++){
        array2d.push(this.randomValues());
        }
        console.log(array2d);
        let counter=0;
        let arrray= [];

        for(let l=0;l<9;l++){
        //     console.log(array2d[l][1]);
        // arrray.push(array2d[l][0]);
        for(let m=0;m<9;m++){
        inputs[counter++].value=array2d[l][m]; //Pushing to html
        console.log(array2d[l][m]);
            // console.log(`L: ${l}    M: ${m}      counter:${counter}  input:${inputs[counter].value}`)
        }

        }
        console.log(arrray);




        // switch (difficulty) {
        //     case "easy":
        //         break;
        //     case "medium":
        //         break;
        //     case "hard":
        //         break;

        // }
    };
    this.randomValues = function() {
            let arr = [];
            let idx = 0;
            while (idx < 9) {
            let num = Math.floor(Math.random() * 9) + 1;
            if (!checkNum(num)) {
            arr.push(num);
            idx++;
            }
            };

            function checkNum(num) {
            for (let i = 0; i < arr.length; i++) {
            if (num === arr[i]) {
            return  true;
            }
            }
            return false;
            }
            return arr; 
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

// //easy 36   
// //medium 31
// //hard 25
// //DECLARATIONS
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
sudoku.generateSolution();
let arrayTest = [[], [], [], [], [], [], [], [], []];
let counter = 0;

const getJSON = () => {
    const request = new XMLHttpRequest();
}
getJSON();

// for (let row = 0; row < 9; row++) {
//     for (let column = 0; column < 9; column++) {
//         let number = Math.floor(Math.random() * 9) + 1;

//         console.log(`row: ${row}  column: ${column} Number: ${number}`);
//         if (column >= 1) {
//             // if(number==arrayTest[row][column-1]){
//             //     console.log(`Este número:${number} es igual a ${arrayTest[row][column-1]}`)
//             // }
//             if (column == 8) {
//             arrayTest[row][column] = number;

//                 //    debugger;
//                 // for(let m=0;m<9;m++){
//                 // let compare =arrayTest[row][m];
//                 // for(let n=0;n<arrayTest.length;n++){
//                 //     if(m!=n){
//                 //         if(compare==arrayTest[row][n]){
//                 //             console.log(`Este número:${compare} es igual a ${arrayTest[row][n]}`)
//                 //             console.log(`Antes: ${arrayTest[row][n]}`);
//                 //             arrayTest[row][n]=Math.floor(Math.random() * 9) + 1;
//                 //             console.log(`Después: ${arrayTest[row][n]}`);
//                 //             }
//                 //     }
//                 const checkRows = function () {
//                     for (let m = 0; m < 9; m++) {
//                         let compare = arrayTest[row][m];
//                         // debugger;
//                         for (let n = 0; n < 9; n++) {
//                             if (m != n) {
//                                 if (compare == arrayTest[row][n]) {
//                                     console.log(`Este número:${compare} es igual a ${arrayTest[row][n]}`)
//                                     // console.log(`Antes: ${arrayTest[row][n]}`);
//                                     arrayTest[row][n] = Math.floor(Math.random() * 9) + 1;
//                                     checkRows();
//                                     // console.log(`Después: ${arrayTest[row][n]}`);
//                                 }
//                             }

//                         }
//                     }
//                 }
//                 checkRows();
//                 // } 
//                 // }

//             }

//         }
//         if(column!=8){
//         arrayTest[row][column] = number;
//         }
//         counter++;
//     }
// }
// console.log(arrayTest);
// console.log(counter);
let loadJson=()=>{
    const xhttp = XMLHttpRequest();
    xhttp.onreadystatechange = ()=>{
        if(xhttp.readyState==4 && xhttp.status==200){
            console.log(JSON.parse(xhttp.responseText));
        }
    }
    xhttp.open("GET","http://127.0.0.1:5501/source.json");
    xhttp.send();
}
