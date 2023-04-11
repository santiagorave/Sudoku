const sudokuObject = function () {
    this.generateSudoku = function (values,difficulty) {
        let inputs = document.getElementsByTagName("input");
        for(let k=0;k<9;k++){
        array2d.push(values[k]);
        }
        let counter=0;
        let positions =this.randomPositions(difficulty);
        //Population
        for(let row=0;row<9;row++){
        for(let column=0;column<9;column++){
            if(positions.includes(counter)) {
            inputs[counter].value=array2d[row][column]; //Pushing to html 
            $(inputs[counter]).prop("disabled",true);
            }
            counter++

            
        }
        }

    };

    this.reset= function() {
     $("input").val("");
     $("input").prop("disabled",false);
    }
    this.randomPositions = function(difficulty) {
        let numberDifficulty;
            switch(difficulty){
                default:
                case "easy":
                numberDifficulty=40;
                break;
                case "medium":

                numberDifficulty=32;
                break;
                case "hard":
                    
                    numberDifficulty=22;
                break;

            }
            let arr = [];
            let idx = 0;
            while (idx < numberDifficulty) {
            let num = Math.floor(Math.random() * 81) + 1;
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

// //easy 40 
// //medium 31
// //hard 25
// //DECLARATIONS
let levelButtons = document.getElementsByClassName("buttons")[0];
let board = document.getElementById("sudoku");
let array2d=[];



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
let getJSON=()=>{
    const request = new XMLHttpRequest();
    request.onreadystatechange = ()=>{
        if(request.readyState==4 && request.status==200){
        sudoku.generateSudoku(JSON.parse(request.responseText)[0].values);
        }
    }
    request.open("GET","http://127.0.0.1:5501/source.json");
    request.send();
}
getJSON();
$(".buttons").children().eq(0).addClass("active");
let sudoku = new sudokuObject();
sudoku.generateBoard();
let rows = $("aside");
$(rows).eq(2).css("border-bottom","5px solid #1D7874");
$(rows).eq(5).css("border-bottom","5px solid #1D7874");

for(let k=0;k<9;k++){
    $(rows[k]).children().eq(2).css("border-right","5px solid #1D7874");
    $(rows[k]).children().eq(5).css("border-right","5px solid #1D7874");
}

$(".buttons").children().eq(0).click(()=>{
    $(".buttons").children().removeClass("active");
    $(".buttons").children().eq(0).addClass("active");
    sudoku.reset();
    sudoku.generateSudoku(array2d,"easy");
    
})

$(".buttons").children().eq(1).click(()=>{
    $(".buttons").children().removeClass("active");
    $(".buttons").children().eq(1).addClass("active");
    sudoku.reset();
    sudoku.generateSudoku(array2d,"medium");
    
})
$(".buttons").children().eq(2).click(()=>{
    $(".buttons").children().removeClass("active");
    $(".buttons").children().eq(2).addClass("active");
    sudoku.reset();
    sudoku.generateSudoku(array2d,"hard");
    
})

let inputs = $("input");
inputs.on("keyup",(e)=> {
    if(e.target.value>9 || e.target.value==0){
        e.target.value="";
        console.log("prevent")
    }
})
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
                // const checkRows = function () {
                //     let arrayDuplicates=[];
                //         for(let a=0;a<36;a++) {
                //             let number = Math.floor(Math.random() * 81) + 1;
                //             if(a==0) {
                //                 arrayDuplicates.push(number);
                //             }else {
                //                 for(let k=0;k<arrayDuplicates.length;k++) {
                //                     let compare = arrayDuplicates[k];
                //                     // while(){

                //                     // }
                //                 }
                //             }

                //         }
                //         // let compare = arrayTest[row][m];
                //         // // debugger;
                //         // for (let n = 0; n < 9; n++) {
                //         //     if (m != n) {
                //         //         if (compare == arrayTest[row][n]) {
                //         //             // console.log(`Antes: ${arrayTest[row][n]}`);
                //         //             arrayTest[row][n] = Math.floor(Math.random() * 9) + 1;
                //         //             checkRows();
                //         //             // console.log(`Después: ${arrayTest[row][n]}`);
                //         //         }
                //         //     }

                //         // }
                // // console.log(arrayDuplicates);

                //     }

                
                // checkRows();
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


