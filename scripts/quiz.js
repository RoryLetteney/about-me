'use strict';
var quizHtml = document.getElementById('js-questions');
var quizQuestionsHtml = document.getElementsByClassName('quiz-question');
var quizAnswersHtml = document.getElementsByClassName('quiz-answer');
var quizUserHtml = document.getElementById('quiz-user');
var quiz = [
  [
    'Do HTML, CSS, and JavaScript use objects?',
    'Can a variable name begin with a period?',
    'Do you like JavaScript?',
    'Did you answer questions 1 and 2?',
    'People require different amounts of time to achieve the same knowledge.'
  ]
];
var quizUser = prompt('What is your name, user?');

quizUserHtml.innerHTML = `Hello, ${quizUser ? quizUser : 'user'}!`;
quizHtml.innerHTML = `<li class='quiz-question'>${quiz[0][0]}</li><input type='text' class='quiz-answer'>`;
quizHtml.innerHTML += `<li class='quiz-question'>${quiz[0][1]}</li><input type='text' class='quiz-answer'>`;
quizHtml.innerHTML += `<li class='quiz-question'>${quiz[0][2]}</li><input type='text' class='quiz-answer'>`;
quizHtml.innerHTML += `<li class='quiz-question'>${quiz[0][3]}</li><input type='text' class='quiz-answer'>`;
quizHtml.innerHTML += `<li class='quiz-question'>${quiz[0][4]}</li><input type='text' class='quiz-answer'>`;

