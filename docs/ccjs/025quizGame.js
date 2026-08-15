const questions = [];

const question1 = {
  category: "Squirrel Agility",
  question: "How fast can squirrels run?",
  choices: ["5 mph", "10 mph", "20 mph"],
  answer: "20 mph",
};

const question2 = {
  category: "Squirrel Anatomy",
  question: "How are squirrel eyes positioned?",
  choices: [
    "close together with minimal sight",
    "on the side with the ability to see behind them",
    "close to nose for optimal nut spotting",
  ],
  answer: "on the side with the ability to see behind them",
};

const question3 = {
  category: "Squirrel Fame",
  question: "Which movie were real squirrels trained for a scene?",
  choices: ["Charlie and the Chocolate Factory", "The Nut Job", "Flora & Ulysses"],
  answer: "Charlie and the Chocolate Factory",
};

const question4 = {
  category: "Squirrel Crime",
  question: "What did Iran claim 14 squirrels do?",
  choices: ["acted as thieves", "acted as spies", "acted as attack squirrels"],
  answer: "acted as spies",
};

const question5 = {
  category: "Squirrel Organization",
  question: "How do squirrels organize their food?",
  choices: [
    "by type of nut",
    "in a way to minimize lost or stolen nuts",
    "using a technique called spatial chunking",
  ],
  answer: "using a technique called spatial chunking",
};

questions.push(question1, question2, question3, question4, question5);

function getRandomQuestion(questions) {
  let numberOfObjects = questions.length;
  let objectPicker = Math.floor(Math.random() * numberOfObjects);
  let selectedObject = questions[objectPicker];
  return selectedObject;
}

let selectedObject = getRandomQuestion(questions);
console.log(selectedObject.question);
let selectedAnswerOptions = selectedObject.choices;

function getRandomComputerChoice(answerOptions) {
  let numberOfAnswers = answerOptions.length;
  let answerPicker = Math.floor(Math.random() * numberOfAnswers);
  let selectedAnswer = answerOptions[answerPicker];
  return selectedAnswer;
}

let selectedAnswer = getRandomComputerChoice(selectedAnswerOptions);
console.log(selectedAnswer);

function getResults(question, response) {
  if (question.answer === response) {
    return "The computer's choice is correct!";
  } else {
    return "The computer's choice is wrong. The correct answer is: " + question.answer;
  }
}

let quizStart = getResults(selectedObject, selectedAnswer);
console.log(quizStart);
