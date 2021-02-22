const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
let questions = [
  'Who was the first American woman in space? ', 
  'True or false: 5000 meters = 5 kilometers. ', 
  '(5 + 3)/2 * 10 = ? ', 
  'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ', 
  'What is the minimum crew size for the ISS? '
  ];
let correctAnswers = [
  'Sally Ride'.toLowerCase(), 
  'True'.toLowerCase(), 
  '40'.toLowerCase(), 
  'Trajectory'.toLowerCase(), 
  '3'.toLowerCase()
  ];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name: ");
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = candidateAnswer;
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer.toLowerCase());
    
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  let questionOne = '';
  if (candidateAnswers[0] === correctAnswers[0]) {
    console.log(questions[0]);
    console.log(`(1) Your answer: ${candidateAnswers[0]} \nMatches the correct answer: ${correctAnswers[0]}\n`);
    questionOne = 1;
    } else {
      console.log(questions[0]);
      console.log(`(1) Your answer: ${candidateAnswers[0]} \nDoes not match the correct answer: ${correctAnswers[0]}\n`);
      questionOne = 0;
    }

  let questionTwo = '';
  if (candidateAnswers[1] === correctAnswers[1]) {
    console.log(questions[1]);
    console.log(`(2) Your answer: ${candidateAnswers[1]} \nMatches the correct answer: ${correctAnswers[1]}\n`);
    questionTwo = 1;
  } else {
    console.log(questions[1]);
    console.log(`(2) Your answer: ${candidateAnswers[1]} \nDoes not match the correct answer: ${correctAnswers[1]}\n`);
    questionTwo = 0;
  }   

  let questionThree = '';
  if (candidateAnswers[2] === correctAnswers[2]) {
    console.log(questions[2]);
    console.log(`(3) Your answer: ${candidateAnswers[2]} \nMatches the correct answer: ${correctAnswers[2]}\n`);
    questionThree = 1;
  } else {
    console.log(questions[2]);
    console.log(`(3) Your answer: ${candidateAnswers[2]} \nDoes not match the correct answer: ${correctAnswers[2]}\n`);
    questionThree = 0;
  }  
  
  let questionFour = '';
  if (candidateAnswers[3] === correctAnswers[3]) {
    console.log(questions[3]);
    console.log(`(4) Your answer: ${candidateAnswers[3]} \nMatches the correct answer: ${correctAnswers[3]}\n`);
    questionFour = 1;
  } else {
    console.log(questions[3]);
    console.log(`(4) Your answer: ${candidateAnswers[3]} \nDoes not match the correct answer: ${correctAnswers[3]}\n`);
    questionFOur = 0;
  }
  
  let questionFive = ''
  if (candidateAnswers[4] === correctAnswers[4]) {
    console.log(questions[4]);
    console.log(`(5) Your answer: ${candidateAnswers[4]} \nMatches the correct answer: ${correctAnswers[4]}\n`);
    questionFive = 1;
  } else {
    console.log(questions[4]);
    console.log(`(5) Your answer: ${candidateAnswers[4]} \nDoes not match the correct answer: ${correctAnswers[4]}\n`);
    questionFive = 0;
  }


  let grade = ((Number(questionOne) + Number(questionTwo) + Number(questionThree) + Number(questionFour) + Number(questionFive)) / Number(5)) * 100;
  

  let finalGrade = console.log(`Overall grade: ${grade}% <<<`);
  if (grade >= 80) {
    console.log(`>>> Status: Passed <<<`);
  } else {
    console.log(`>>> Status: Failed <<<`);
  }
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome!", candidateName);
  askQuestion();

  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};