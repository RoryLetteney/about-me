'use strict';
var quizHtml = document.getElementById('js-questions');
var quizQuestionsHtml = document.getElementsByClassName('quiz-question');
var quizAnswersHtml = document.getElementsByClassName('quiz-answer');
var quizUserHtml = document.getElementById('quiz-user');
var quiz = [
  'Do HTML, CSS, and JavaScript use objects?',
  'Can a variable name begin with a period?',
  'Do you like JavaScript?',
  'Every baseball team has at least one pitcher, correct?',
  'People require different amounts of time to achieve the same knowledge.'
];
var quizUser = prompt('What is your name, user?');

var quizQuestions = () => {
  var answer1 = prompt(quiz[0]);
  answer1 = answer1.toLowerCase();
  if (answer1 === 'yes' || answer1 === 'y') {
    console.log(quiz[0], answer1,': Correct!');
    quizQuestionsHtml[0].classList.toggle('green');
  } else {
    console.log(quiz[0], answer1,': Incorrect!');
    quizQuestionsHtml[0].classList.toggle('red');
  }
  quizQuestionsHtml[0].innerHTML += `&nbsp;&nbsp;&nbsp;${answer1}`;
  var answer2 = prompt(quiz[1]);
  answer2 = answer2.toLowerCase();
  if (answer2 === 'no' || answer2 === 'n') {
    console.log(quiz[1], answer2,': Correct!');
    quizQuestionsHtml[1].classList.toggle('green');
  } else {
    console.log(quiz[1], answer2,': Incorrect!');
    quizQuestionsHtml[1].classList.toggle('red');
  }
  quizQuestionsHtml[1].innerHTML += `&nbsp;&nbsp;&nbsp;${answer2}`;
  var answer3 = prompt(quiz[2]);
  answer3 = answer3.toLowerCase();
  if (answer3 === 'yes' || answer3 === 'y' || answer3 === 'no' || answer3 === 'n') {
    console.log(quiz[2], answer3,': Correct!');
    quizQuestionsHtml[2].classList.toggle('green');
  } else {
    console.log(quiz[2], answer3,': Incorrect!');
    quizQuestionsHtml[2].classList.toggle('red');
  }
  quizQuestionsHtml[2].innerHTML += `&nbsp;&nbsp;&nbsp;${answer3}`;
  var answer4 = prompt(quiz[3]);
  answer4 = answer4.toLowerCase();
  if (answer4 === 'yes' || answer4 === 'y') {
    console.log(quiz[3], answer4,': Correct!');
    quizQuestionsHtml[3].classList.toggle('green');
  } else {
    console.log(quiz[3], answer4,': Incorrect!');
    quizQuestionsHtml[3].classList.toggle('red');
  }
  quizQuestionsHtml[3].innerHTML += `&nbsp;&nbsp;&nbsp;${answer4}`;
  var answer5 = prompt(quiz[4]);
  answer5 = answer5.toLowerCase();
  if (answer5 === 'yes' || answer5 === 'y') {
    console.log(quiz[4], answer5,': Correct!');
    quizQuestionsHtml[4].classList.toggle('green');
  } else {
    console.log(quiz[4], answer5,': Incorrect!');
    quizQuestionsHtml[4].classList.toggle('red');
  }
  quizQuestionsHtml[4].innerHTML += `&nbsp;&nbsp;&nbsp;${answer5}`;
};

quizUserHtml.innerHTML = `Hello, ${quizUser ? quizUser : 'user'}!`;

quizHtml.innerHTML = `<li class='quiz-question'>${quiz[0]}</li>`;
quizHtml.innerHTML += `<li class='quiz-question'>${quiz[1]}</li>`;
quizHtml.innerHTML += `<li class='quiz-question'>${quiz[2]}</li>`;
quizHtml.innerHTML += `<li class='quiz-question'>${quiz[3]}</li>`;
quizHtml.innerHTML += `<li class='quiz-question'>${quiz[4]}</li>`;

window.setTimeout((() => quizQuestions()), 3000);

// quizHtml.innerHTML = `<li class='quiz-question'>${quiz[0][0]}</li><input type='text' class='quiz-answer'>`;
// quizHtml.innerHTML += `<li class='quiz-question'>${quiz[0][1]}</li><input type='text' class='quiz-answer'>`;
// quizHtml.innerHTML += `<li class='quiz-question'>${quiz[0][2]}</li><input type='text' class='quiz-answer'>`;
// quizHtml.innerHTML += `<li class='quiz-question'>${quiz[0][3]}</li><input type='text' class='quiz-answer'>`;
// quizHtml.innerHTML += `<li class='quiz-question'>${quiz[0][4]}</li><input type='text' class='quiz-answer'>`;


