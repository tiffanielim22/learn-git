import { questions } from './quiz-questions.js';

document.addEventListener('DOMContentLoaded', () => {
  
    let currentQuestionIndex = 0;
    let score = 0;
  
    const questionElement = document.getElementById('question');
    const choicesContainer = document.getElementById('choices');
    const scoreElement = document.getElementById('score');
  
    function displayQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
  
      choicesContainer.innerHTML = '';
      currentQuestion.choices.forEach((choice, index) => {
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        choiceButton.addEventListener('click', () => checkAnswer(index));
        choicesContainer.appendChild(choiceButton);
      });
    }
  
    function checkAnswer(selectedIndex) {
      const currentQuestion = questions[currentQuestionIndex];
      if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
      }
      currentQuestionIndex++;
  
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        showResult();
      }
    }
  
    function showResult() {
      questionElement.textContent = 'Quiz completed!';
      choicesContainer.innerHTML = '';
      scoreElement.textContent = `Your score: ${score}/${questions.length}`;
    }
  
    displayQuestion();
  });  