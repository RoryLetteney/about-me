'use strict';
var quizUser;
var quizHtml = document.getElementById('js-questions');
var quizQuestionsHtml = document.getElementsByClassName('quiz-question');
var quizUserHtml = document.getElementById('quiz-user');
var quiz = [
  'Do HTML, CSS, and JavaScript use objects?',
  'Can a variable name begin with a period?',
  'Do you like JavaScript?',
  'Every baseball team has at least one pitcher, correct?',
  'People require different amounts of time to achieve the same knowledge.'
];

quizUser = prompt('What is your name, user?');
quizUserHtml.innerHTML = `Hello, ${quizUser ? quizUser : 'user'}!`;

for (var i = 0; i < quiz.length; i++) {
  quizHtml.innerHTML += `<li class='quiz-question'>${quiz[i]}</li>`;
  var guess = prompt(quiz[i]);
  guess = guess.toLowerCase();
  if ( i === 1 ) {
    if (guess === 'no' || guess === 'n') {
      console.log(quiz[i], guess, ': Correct!');
      quizQuestionsHtml[i].classList.toggle('green');
    } else {
      console.log(quiz[i], guess, ': Incorrect!');
      quizQuestionsHtml[i].classList.toggle('red');
    }
  } else if ( i === 2 ) {
    if (guess === 'no' || guess === 'n' || guess === 'yes' || guess === 'y') {
      console.log(quiz[i], guess, ': Correct!');
      quizQuestionsHtml[i].classList.toggle('green');
    } else {
      console.log(quiz[i], guess, ': Incorrect!');
      quizQuestionsHtml[i].classList.toggle('red');
    }
  } else if (guess === 'yes' || guess === 'y') {
    console.log(quiz[i], guess, ': Correct!');
    quizQuestionsHtml[i].classList.toggle('green');
  } else {
    console.log(quiz[i], guess, ': Incorrect!');
    quizQuestionsHtml[i].classList.toggle('red');
  }
  quizQuestionsHtml[i].innerHTML += `&nbsp;&nbsp;&nbsp;${guess}`;
}