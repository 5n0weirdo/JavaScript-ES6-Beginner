//Function Declaration
walk();
function walk() {
    console.log("Walk");
}


//Anonymous Function Expression
let run = function() {
    console.log("Run")
};

let move = run;
run(); //Run
move(); //Run