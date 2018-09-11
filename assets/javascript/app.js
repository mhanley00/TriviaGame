//______________________________________________________
//GLOBAL VARIABLES
//-----–––––––––––––––––––––––––––––––––––––––––––––––––
var jeopardyQuestionsG = [{
    category: "AN ALBUM COVER.",
    statement: "STATES THAT END IN 'HAMPSHIRE'",
    question: {
      a: "WHAT IS SOUTH HAMPSHIRE",
      b: "WHAT IS NEW HAMPSHIRE",
      c: "WHAT IS EAST HAMPSHIRE"
    },
    answer: "b"
  },
  {
    category: "MONTHS OF THE YEAR.",
    statement: "THIS IS THE ONLY MONTH THAT STARTS WITH 'FEB'",
    question: {
      a: "WHAT IS FEBRUARY?",
      b: "WHAT IS FEBTOBER?",
      c: "WHAT IS FEBGUST?"
    },
    answer: "a"
  },
  {
    category: "AN ALBUM COVER.",
    statement: "THIS IS THE COLOR OF THE BEATLES WHITE ALBUM",
    question: {
      a: "WHAT IS PEACH?",
      b: "WHERE IS BLUE BLUE?",
      c: "WHAT IS WHITE?",
    },
    answer: "c"
  },
  {
    category: "'S' WORDS",
    statement: "POPEYE IS THIS SORT OF MAN.",
    question: {
      a: "WHAT IS...POPEYE?",
      b: "SABER!",
      c: "WHAT IS SAILOR?"
    },
    answer: "c"
  },
  {
    category: "BODIES OF WATER",
    statement: "THIS BODY OF WATER GAVE SALT LAKE CITY ITS NAME.",
    question: {
      a: "SWORDS?",
      b: "SALT LAKE?!",
      c: "WHAT IS LAKE SUPERIOR?"
    },
    answer: "b"
  },
  {
    category: "MOVIES",
    statement: "THIS RACING MOVIE WITH DOM DELUISE TOLD US THAT YES CANNONBALLS CAN RUN. 'CANNONBALLS CAN RUN.'",
    question: {
      a: "THE CANNONBALL RUN?",
      b: "I DON'T KNOW, SHAEKESPEARE?",
      c: "CANNONBALLIN' MAMIM?"
    },
    answer: "c"
  },
  {
    category: "MOVIES THAT START WITH THE WORD JAWS",
    statement: "THIS MOVIE STARTS WITH THE WORD JAWS.",
    question: {
      a: "WHAT IS SHARK WEEK?",
      b: "WHAT IS JAWS?",
      c: "WHAT IS TITANIC?"
    },
    answer: "b"
  },
  {
    category: "CONDIMENTS",
    statement: "THIS CONDIMENT IS MADE FROM MUSTARD SEEDS.",
    question: {
      a: "THE ANSWER OF COURSE IS ONIONS.",
      b: "YEAH, WHAT DO YA WANT?",
      c: "WHAT IS MUSTARD?"
    },
    answer: "c"
  },
  {
    category: "ANIMAL SOUNDS",
    statement: "THIS IS THE SOUND A DOGGY MAKES.",
    question: {
      a: "MOO.",
      b: "RUFF.",
      c: "WHO IS, AH, SCOOBY DOO?"
    },
    answer: "b"
  },
  {
    category: "NUMBERS",
    statement: "WRITE A NUMBER, ANY NUMBER AND YOU WIN.",
    question: {
      a: "V.",
      b: "THREEVE. A COMBINATION OF THREE AND FIVE.",
      c: "$TEXAS."
    },
    answer: "a"
  },
];

var quizCard = $('#quiz');
var resultsCard = $('#results');

function makeQuiz() {
  jeopardyQuestionsG.forEach((product, index) => {
    quizCard.append(
      `<label>
                <h2>${jeopardyQuestionsG[index].statement}</h2>
                <p><input type="radio" name="${jeopardyQuestionsG[index].statement}" value="${jeopardyQuestionsG[index].question.a}"></input>
                ${jeopardyQuestionsG[index].question.a}</p>
                <p><input type="radio" name="${jeopardyQuestionsG[index].statement}" value="${jeopardyQuestionsG[index].question.b}">
                ${jeopardyQuestionsG[index].question.b}</p>
                <p><input type="radio" name="${jeopardyQuestionsG[index].statement}" value="${jeopardyQuestionsG[index].question.c}">
                      ${jeopardyQuestionsG[index].question.c}</p>
                
      </label>`
    )
  })}

makeQuiz();

// function showResults(){
//   var optionContainers = quizCard.html(jeopardyQuestionsG); 
//   var numCorrect = 0;
//   var numWrong = 0;
//   var numBlank = 0;

// jeopardyQuestionsG.forEach( (product, index) => {
// //     var optionContainer; = optionContainers[questionNumber];
// //     var selector ; //= 'input[name=question'+questionNumber+']:checked';
//      var userPick =(optionContainer.append(selector) || {}).value; //this is "or if it's empty"
//      if(userPick === jeopardyQuestionsG[index].answer){
//          numCorrect++;
//         }
//       else if (userPick !== jeopardyQuestionsG[index].answer){
//         numWrong++;
//       }
//       else {
//         numBlank++;
//       }
//     });
// //     // show number of correct answers out of total
//    resultsCard.innerHTML = numCorrect
// // }