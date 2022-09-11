const readline = require('readline');
const chalk=require('chalk');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let index=0;
let currentScore=0;
let currentUser='';


rl.question(`Welcome to the Tricky Quizz Game 
${chalk.gray(`if You Don't Wanna Play Just enter  e to Exit...`)} \n
What's Your Name ?  :`,(userInput)=>{
    currentUser=userInput;
    if(userInput.trim().toLowerCase()=="e"){
      rl.close();
    }
    else{
      console.log('');
      console.log(chalk.blue.bold(`Hey ${chalk.redBright(userInput)} let's Start \n`));
      play();
    }
  }
)

let hightScore=10;
let highestScoreAcheivers=[
  {
    name:'sangeetha',
    score:10
  },
  {
    name:'harry',
    score:6
  },
  {
    name:'lilly',
    score:5
  },
  {
    name:'sandeep',
    score:2
  },
  {
    name:'sonu',
    score:1
  }
]

let trickyQuizz=[
  {
    question:"What Will Actually find at the end of every rainbow? ",
    answer:'w',
  },
  {
    question:"What has a face and two hands ,but has no legs ? ",
    answer:'clock',
  },
  {
    question:"some months have 31 days ,others have 30 days,but how many have 28 days? ",
    answer:'12'
  },
  {question:"What has a head, a tail, but does not have a body? ",
    answer:'coin'
  },
  {question:"What 5-letter word becomes shorter when you add two letters to it?",
    answer:'short'
  },
  {question:"What bird can lift the most weight?",
    answer:'crane'
  },
  {question:"Beth’s mother has three daughters. One is called Lara, the other one is Sara. What is the name of the third daughter?",
    answer:'beth'
  },
  {question:"What word is spelled incorrectly in every single dictionary?",
    answer:'incorrectly'
  },
  {question:"What is it that lives if it is fed, and dies if you give it a drink?",
    answer:'fire'
  },
  {question:"What can one catch that is not thrown?",
    answer:'cold'
  },
]

let quizQuestionLength=trickyQuizz.length;
function play(){
  console.log('')
  rl.question(`${chalk.bold.greenBright(trickyQuizz[index].question)} \n \n${chalk.whiteBright.bgYellow('Type skip to know the answer')} : `,(answer)=>{
          console.log('')
          if(answer.toLowerCase()==trickyQuizz[index].answer){
              console.log(chalk.green.bold(`Hurray,You got it`),currentScore+=1,' points');
          }
          else if(answer.toLowerCase()=='skip'){
            console.log(chalk.yellowBright(` the answer is `)+`${trickyQuizz[index].answer}`);
          }
          else{
            console.log(chalk.redBright.bold('oh noo, its wrong'),currentScore,' points');
          }
          index+=1
          checkindexExceeded();
      })
} 

function checkindexExceeded(){
   if(quizQuestionLength<=index){
      exitPlay();
    }
    else{
      play()
    }
}


function exitPlay(){
  let Acheivers=[];
  let rank=[];
  let currentRank;
  for (let [key,{name,score}] of highestScoreAcheivers.entries()){
        if(currentScore==score)Acheivers.push(name);
        if(!rank.includes(score)){
          rank.push(score);
        }
    }
    highestScoreAcheivers.push({name:currentUser,score:currentScore});
   if(!rank.includes(currentScore)){
          rank.push(currentScore);
    }
    rank.sort(function(a, b){return b - a});
    currentrank=rank.indexOf(currentScore)+1;
    console.log('');
    console.log(chalk.cyanBright.bold(`congrats your one among the Acheivers mentioned below your rank is ${currentrank}`));
    console.log('');
          console.log(chalk.whiteBright.bold(...Acheivers,chalk.blue.bgWhite(currentUser)));  

  rl.question(`Do u Wanna play Again Yes/No  :`,(userInput)=>{
    console.log('')
    if(userInput.toLowerCase()=='yes'){
      index=0;
      currentScore=0;
      play()
    }
    else{
      rl.close();
    }
  })
  
}
