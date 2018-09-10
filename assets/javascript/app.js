//______________________________________________________
//GLOBAL VARIABLES
//-----–––––––––––––––––––––––––––––––––––––––––––––––––
var jeopardyQuestionsG = [
  {
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
    options: {
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
//var button for $("#button")??
function makeQuiz(){
    
    jeopardyQuestionsG.forEach(( ) => {
        quizCard.append(
              `<label>
                <h2>${jeopardyQuestionsG[0].statement}</h2>
                <input type="radio" name="${jeopardyQuestionsG[0].question.a}" value="${jeopardyQuestionsG[0].question.a}">
                <input type="radio" name="${jeopardyQuestionsG[0].question.b}" value="${jeopardyQuestionsG[0].question.b}">
                <input type="radio" name="${jeopardyQuestionsG[0].question.c}" value="${jeopardyQuestionsG[0].question.c}">
                
              </label>`
            )})
        
}
      
        //     var options = []; //storing list of answer options
      
        //     // and for each available answer...
        //     for(letter in currentQuestion.options){
        //         // ...add an HTML radio button
        // options.push(
        //     // `<label>
        //     //   <input type="radio" name="question${questionNumber}" value="${letter}">
        //     //   ${letter} :
        //     //   ${currentQuestion.options[letter]}
        //     // </label>`
          // );
        //}
         // add this question and its options to the output
      // output.push(
      //   `<div class="question"> ${currentQuestion.question} </div>
      //   <div class="options"> ${options.join('')} </div>`
      //);
//     }
//   );
//   // quizCard.innerHTML = output.join(''); //howt to phrase in jQuery?
// }



// function showResults(){
//     // gather answer containers from our quiz
//   var optionContainers = quizCard.html(jeopardyQuestionsG); //this will replace everything in the html
//   //.append, .text

//   // keep track of user's answers
//   let correctCounter = 0;

//   jeopardyQuestionsG.forEach( (currentQuestion, questionNumber) => {

//     // find selected answer
//     var optionContainer;// = optionContainers[questionNumber];
//     var selector ; //= 'input[name=question'+questionNumber+']:checked';
//     var userPick ; //=(optionContainer.append(selector) || {}).value; //this is "or if it's empty"
//      // if answer is correct
//      if(userPick === currentQuestion.correctAnswer){
//         // add to the number of correct answers
//         correctCounter++;
  
//         // color the answers green
//         //optionContainers[questionNumber].style.color = 'lightgreen';
//       }
//       // if answer is wrong or blank
//       else{
//         // color the answers red
//         //optionContainers[questionNumber].style.color = 'red';
//       }
//     });
//     // show number of correct answers out of total
//     resultsCard.innerHTML = correctCounter + ' out of ' + jeopardyQuestionsG.length;
// }



// display quiz right away


// on submit, show results


 makeQuiz();
//  showResults();