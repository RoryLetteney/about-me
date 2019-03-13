'use strict';
var currentQuestion = 0;
var score = 0;
var quizUser;
var guess;
var quizHtml = document.getElementById('js-questions');
var quizQuestionsHtml = document.getElementsByClassName('quiz-question');
var quizUserHtml = document.getElementById('quiz-user');
var scoreEl = document.getElementById('score');
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
  [
    'Guess the number (from 1 through 5) in my head!',
    Math.floor(Math.random() * 5) + 1
  ],
  [
    'In which states have I lived?',
    [
      'colorado',
      'wisconsin',
      'illinois',
      'north carolina'
    ]
  ]
];

var runQuiz = function() {
  quizUser = prompt('What is your name, user?');
  quizUserHtml.innerHTML = `Hello, ${quizUser ? quizUser : 'user'}!`;

  for (var yn = 0; yn < quiz[0][0].length; yn++) {
    guess = prompt(quiz[0][0][yn]);
    quizHtml.innerHTML += `<li class='quiz-question'>${quiz[0][0][yn]}</li>`;
    guess = guess.toLowerCase();
    if (quiz[0][1][yn].includes(guess)) {
      console.log(quiz[0][0][yn], guess, ': Correct!');
      quizQuestionsHtml[currentQuestion].classList.toggle('green');
      score++;
    } else {
      console.log(quiz[0][0][yn], guess, ': Incorrect!');
      quizQuestionsHtml[currentQuestion].classList.toggle('red');
    }
    quizQuestionsHtml[currentQuestion].innerHTML += `&nbsp;&nbsp;&nbsp;${guess}`;
    currentQuestion++;
  }

  for (var num = 0; num < 1; num++) {
    var attempts = 4;
    var guesses = 0;
    var correctAnswer = quiz[1][1].toString();
    quizHtml.innerHTML += `<li class='quiz-question'>${quiz[1][0]}</li>`;
    while(guesses < attempts) {
      guess = prompt(quiz[1][0]);
      if (guess === quiz[1][1].toString()) {
        console.log(quiz[1][0], guess, ': Correct!');
        quizQuestionsHtml[currentQuestion].innerHTML += `&nbsp;&nbsp;&nbsp;${guess}`;
        quizQuestionsHtml[currentQuestion].classList.toggle('green');
        currentQuestion++;
        score++;
        guesses = attempts;
        break;
      } else if (guesses >= attempts || correctAnswer !== guess) {
        console.log(quiz[1][0], guess, ': Incorrect!');
        if (guess > correctAnswer) {
          alert(`Incorrect! The correct answer is lower than ${guess}.`);
        } else {
          alert(`Incorrect! The correct answer is higher than ${guess}.`);
        }
        guesses++;
      } else if (guesses >= attempts && correctAnswer !== guess) {
        quizQuestionsHtml[currentQuestion].innerHTML += `&nbsp;&nbsp;&nbsp;${guess}`;
        quizQuestionsHtml[currentQuestion].classList.toggle('red');
        currentQuestion++;
        break;
      } else {
        guesses++;
      }
    }
  }

  var pointsGained = false;
  quizHtml.innerHTML += `<li class='quiz-question'>${quiz[2][0]}</li>`;
  for (var i = 0; i < 4; i++) {
    var correctGuess = false;
    guess = prompt(quiz[2][0]);
    guess = guess.toString().toLowerCase();
    for (var mc = 0; mc < quiz[2][1].length; mc++) {
      if (guess === quiz[2][1][mc]) {
        pointsGained = true;
        correctGuess = true;
        alert('Correct!');
      }
    }
    if (correctGuess === false) {
      alert('Incorrect! Guess again!');
    }
    if (i === 3) {
      for (var a = 0; a < quiz[2][1].length; a++) {
        quizQuestionsHtml[currentQuestion].innerHTML += `&nbsp;&nbsp;&nbsp;${quiz[2][1][a]}`;
      }
      if (pointsGained === true) {
        quizQuestionsHtml[currentQuestion].classList.toggle('green');
        score++;
      } else {
        quizQuestionsHtml[currentQuestion].classList.toggle('red');
      }
    }
  }

  scoreEl.innerHTML += (' ' + score);
};

setTimeout(() => runQuiz(), 5000);