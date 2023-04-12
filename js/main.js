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

let squres = [
    [1,2,3,10,11,12,19,20,21],
    [4,5,6,13,14,15,22,23,24],
    [7,8,9,16,17,18,25,26,27],
    [28,29,30,37,38,39,46,47,48],
    [31,32,33,40,41,42,49,50,51],
    [34,35,36,43,44,45,52,53,54],
    [55,56,57,64,65,66,73,74,75],
    [58,59,60,67,68,69,76,77,78],
    [61,62,63,70,71,72,79,80,81]
];
let findColumn = function(id, columns) {
    for (let col of columns) {
      if (col.includes(id)) {
        return col;
      }
    }
    return null;
};
let validateSquare = function(target){
    target.css("color","black");
    let idx = parseInt(target[0].id);
    let cols = findColumn(idx, squres);
    for(let col of cols) {
        if(target[0] == $(inputs).get(col-1)) {
            continue;
        }
        else if(target[0].value == $(inputs).get(col-1).value){
            return true;
        }
    }
}
// add
let row = null;
const validateRows = function(target,siblings) {
    target.css("color","black");
    for(let rowValue of siblings) {
        if(target[0].value==rowValue.value) {
            // add
            row = $(rowValue);
            return true;
        }else {
            target.css("color","green"); 


        }
    }
}
// add
let col = null;
const validateColumns = function(target) {
    target.css("color","black");
    let rows = $("aside");
        for(let a of rows) {
            if( $(target).val()==$(a).children()[target.index()].value && target.prop("id")!=$(a).children()[target.index()].id) {
                return true;
            }
        }
}
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
        console.log(JSON.parse(request.responseText)[0].values);
        }
    }
    request.open("GET","/source.json");
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
let letters = RegExp(/^[a-zA-Z]*$/);
inputs.on("keyup",(e)=> {
    if(e.target.value>9 || e.target.value==0 || e.target.value.match(letters) ){
        e.target.value="";
        console.log("prevent");
    }else {
        $(e.target).css("color","black");
        if(validateRows($(e.target),$(e.target).siblings()) ||  validateColumns($(e.target)) || validateSquare($(e.target)) ){
            $(e.target).css("color","red");

        } else {
            $(e.target).css("color","green"); 
        }
        // console.log(validateRows($(e.target),$(e.target).siblings())) ;
        // validateColumns($(e.target));
        
    }
})

