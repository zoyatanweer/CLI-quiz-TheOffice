var readlineSync = require('readline-sync');
var userName = readlineSync.question("What's your name?");
console.log("Hi " + userName + " . Let's begin with the The Office quiz!");
var score = 0;

//function
function play(question, answer){
  var userAnswer = readlineSync.question(question);
   if(userAnswer===answer){
     console.log("Correct!")
     score++;
   }
   else{
     console.log("wrong")
   } 
    console.log("Score: "+ score);
    console.log("-----------")
}

//array of objects
var questions =[
{
  question : "What's the middle name of Dwight Shrute?",
  answer: "kurt"
},
{
  question :"What part of his body does Michael burn on a George Foreman grill?",
  answer:"foot"
},
{
  question :"What was the name of Angela's cat who was killed by Dwight?",
  answer:"sprinkles"
},
{
  question : "Where did Jim and Pam get married?",
  answer : "niagra falls"
},
{
  question :"What type of pond does Michael fall into?",
  answer: "koi pond"
}
];

for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

//final score display
console.log("You completed the quiz! Your final score is " + score);
