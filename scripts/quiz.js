'use strict';
var quizUser;
var quizHtml = document.getElementById('js-questions');
var quizQuestionsHtml = document.getElementsByClassName('quiz-question');
var quizUserHtml = document.getElementById('quiz-user');
var quiz = [
  [
    [
      'Do HTML, CSS, and JavaScript use objects?',
      'Can a variable name begin with a period?',
      'Do you like JavaScript?',
      'Every baseball team has at least one pitcher, correct?',
      'People require different amounts of time to achieve the same knowledge.'
    ],
    [
      ['y', 'yes'],
      ['n', 'no'],
      ['n', 'no', 'y', 'yes'],
      ['y', 'yes'],
      ['y', 'yes']
    ]
  ],
];

quizUser = prompt('What is your name, user?');
quizUserHtml.innerHTML = `Hello, ${quizUser ? quizUser : 'user'}!`;

for (var i = 0; i < quiz[0][0].length; i++) {
  var guess = prompt(quiz[0][0][i]);
  quizHtml.innerHTML += `<li class='quiz-question'>${quiz[0][0][i]}</li>`;
  guess = guess.toLowerCase();
  if (quiz[0][1][i].includes(guess)) {
    console.log(quiz[0][0][i], guess, ': Correct!');
    quizQuestionsHtml[i].classList.toggle('green');
  } else {
    console.log(quiz[0][0][i], guess, ': Incorrect!');
    quizQuestionsHtml[i].classList.toggle('red');
  }
  quizQuestionsHtml[i].innerHTML += `&nbsp;&nbsp;&nbsp;${guess}`;
}