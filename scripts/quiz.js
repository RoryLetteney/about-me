'use strict';
var currentQuestion = 0;
var score = 0;
var quizQuestionCount = 0;
var quizUser;
var guess;
var i;
var a;
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
      'north carolina',
      'iowa'
    ]
  ]
];

(function getQuizQuestionCount() {
  for (i = 0; i < quiz.length; i++) {
    if (typeof quiz[i][0] !== 'object') {
      quizQuestionCount++;
    } else {
      quizQuestionCount += parseInt(`${quiz[i][0].constructor === Object ? Object.keys(quiz[i][0]).length : quiz[i][0].length}`);
    }
  }
}());

var updateQuizHTML = function(question) {
  quizHtml.innerHTML += `<li class='quiz-question'>${question}</li>`;
};

var updateQuizQuestionsHTML = function(answer) {
  quizQuestionsHtml[currentQuestion].innerHTML+= `&nbsp; &nbsp; &nbsp; ${answer}`;
};

var runQuiz = function() {
  quizUser = prompt('What is your name, user?');
  quizUserHtml.innerHTML = `Hello, ${quizUser ? quizUser : 'user'}!`;

  ( function yesNo() {
    for (i = 0; i < quiz[0][0].length; i++) {
      guess = prompt(quiz[0][0][i]);
      updateQuizHTML(quiz[0][0][i]);
      guess = guess.toLowerCase();
      if (quiz[0][1][i].includes(guess)) {
        console.log(quiz[0][0][i], guess, ': Correct!');
        quizQuestionsHtml[currentQuestion].classList.toggle('green');
        score++;
      } else {
        console.log(quiz[0][0][i], guess, ': Incorrect!');
        quizQuestionsHtml[currentQuestion].classList.toggle('red');
      }
      updateQuizQuestionsHTML(guess);
      currentQuestion++;
    }
  }());

  ( function numberGuess(){
    for (i = 0; i < 1; i++) {
      var attempts = 4;
      var guesses = 0;
      var correctAnswer = quiz[1][1].toString();
      updateQuizHTML(quiz[1][0]);
      while(guesses < attempts) {
        guess = prompt(quiz[1][0]);
        if (guess === quiz[1][1].toString()) {
          console.log(quiz[1][0], guess, ': Correct!');
          updateQuizQuestionsHTML(guess);
          quizQuestionsHtml[currentQuestion].classList.toggle('green');
          currentQuestion++;
          score++;
          guesses = attempts;
          break;
        } else if (guesses >= attempts - 1 && correctAnswer !== guess) {
          updateQuizQuestionsHTML(guess);
          quizQuestionsHtml[currentQuestion].classList.toggle('red');
          currentQuestion++;
          break;
        } else if (correctAnswer !== guess) {
          console.log(quiz[1][0], guess, ': Incorrect!');
          if (guess > correctAnswer) {
            alert(`Incorrect! The correct answer is lower than ${guess}.`);
          } else {
            alert(`Incorrect! The correct answer is higher than ${guess}.`);
          }
          guesses++;
        } else {
          guesses++;
        }
      }
    }
  }());

  ( function mulitpleChoice() {
    var attempts = 4;
    var pointsGained = false;
    updateQuizHTML(quiz[2][0]);
    for (i = 0; i < attempts; i++) {
      var correctGuess = false;
      guess = prompt(quiz[2][0]);
      guess = guess.toLowerCase();
      for (a = 0; a < quiz[2][1].length; a++) {
        if (guess === quiz[2][1][a]) {
          pointsGained = true;
          correctGuess = true;
          alert('Correct!');
        }
      }
      if (correctGuess === false) {
        alert('Incorrect! Guess again!');
      }
      if (i >= attempts - 1) {
        for (a = 0; a < quiz[2][1].length; a++) {
          updateQuizQuestionsHTML(quiz[2][1][a]);
        }
        if (pointsGained === true) {
          quizQuestionsHtml[currentQuestion].classList.toggle('green');
          score++;
        } else {
          quizQuestionsHtml[currentQuestion].classList.toggle('red');
        }
      }
    }
  }());

  scoreEl.innerHTML += ` ${score}/${quizQuestionCount}`;
};

setTimeout(() => runQuiz(), 5000);
