const rs =require('readline-sync');
const chalk = require('chalk');

//Starting Greet Portion
console.log(chalk.green.bold("\nWelcome to The Game!!!"));
var playerName = rs.question("Hello What is Your Name :- ");
console.log(chalk.yellow(`${playerName} , Welcome to The Game \n`));

//game check portion
var score = 0;
function gamePlay(questions , A , B , C , D, correctAnswer){
    console.log(chalk.cyanBright(questions));
    console.log("A :"+A);
    console.log("B :"+B);
    console.log("C :"+C);
    console.log("D :"+D);
    var answer  = rs.question(chalk.magenta("Answer in Option : -"));
    if(answer.toUpperCase() == correctAnswer){
        console.log(chalk.green('\tCorrect Answer'));    
        score = score+5;
    }
    else{
        console.log(chalk.red('\tWrong Answer'));    
        if(correctAnswer === "A")
        {
            correctAnswer=A;
        }else if(correctAnswer === "B")
        {
            correctAnswer=B;
        }else if(correctAnswer === "C")
        {
            correctAnswer=C;
        }else if(correctAnswer === "D")
        {
            correctAnswer=D;
        }
        console.log(chalk.greenBright("Correct Answer is: "+correctAnswer));
        score = score-2;
    }
        console.log(chalk.yellowBright('Your score is  :' + score));    
        console.log(chalk.gray('\n--------------------------------------------------------------\n'));    
} 
//creating qus answer 
var one = {
    qus:"Which country operationalized world’s largest radio telescope ?",
    A:"USA",
    B:"China",
    C:"Russia",
    D:"India",
    ans:"B"
};
var two = {
    qus:"Which of the following is the capital of Arunachal Pradesh ?",
    A:"Itanagar",
    B:"Dispur",
    C:"Imphal",
    D:"Panaji",
    ans:"A"
};
var three = {
    qus:"What is India’s rank on EIU’s Global Democracy Index 2019 ?",
    A:"48th Rank",
    B:"50th Rank",
    C:"53rd Rank",
    D:"51st Rank",
    ans:"D"
};
var four = {
    qus:"Which of the following states is not located in the North ? ",
    A:"Jharkhand",
    B:"Jammu and Kashmir",
    C:"Himachal Pradesh",
    D:"Haryana",
    ans:"A"
};
var five = {
    qus:"What is India’s rank on the WEF’s Global Social Mobility Index 2020 ?",
    A:"75th Rank",
    B:"77th Rank",
    C:"76th Rank",
    D:"78th Rank",
    ans:"C"
};
//calling function
qusArray = [one,two,three,four,five];
for(let i =0 ; i<qusArray.length;i++){
    gamePlay(qusArray[i].qus,qusArray[i].A,qusArray[i].B,qusArray[i].C,qusArray[i].D,qusArray[i].ans);
}
console.log(chalk.yellow('\n=====  Your Final score is  : ' + score + "=====\n"));    
