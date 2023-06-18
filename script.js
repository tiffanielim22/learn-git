document.addEventListener('DOMContentLoaded', () => {
    const questions = [
      {
        question: 'Which Git command is used to create a new branch?',
        choices: ['git checkout', 'git branch', 'git commit'],
        correctAnswer: 1
      },
      {
        question: 'What does "git push" do?',
        choices: ['Fetches changes from a remote repository', 'Synchronizes the local repository with a remote repository', 'Adds changes to the staging area'],
        correctAnswer: 1
      },
      {
        question: 'How can you discard local changes in Git?',
        choices: ['git reset', 'git commit', 'git revert'],
        correctAnswer: 0
      },
        {
          question: 'What Git command is used to create and switch to a new branch in one step?',
          choices: ['git branch', 'git checkout -b', 'git merge'],
          correctAnswer: 1
        },
        {
          question: 'What is the purpose of the "git clone" command?',
          choices: ['To create a new Git repository', 'To copy an existing Git repository to your local machine', 'To merge two branches in Git'],
          correctAnswer: 1
        },
        {
          question: 'What does "git merge" do?',
          choices: ['Fetches changes from a remote repository', 'Synchronizes the local repository with a remote repository', 'Combines changes from one branch into another'],
          correctAnswer: 2
        },
        {
          question: 'How can you undo the last Git commit?',
          choices: ['git reset', 'git revert', 'git checkout'],
          correctAnswer: 0
        },
        {
          question: 'What is the purpose of the "git stash" command?',
          choices: ['To permanently delete changes', 'To save changes temporarily and revert to the last commit', 'To publish changes to a remote repository'],
          correctAnswer: 1
        },
        {
          question: 'What is the cardinal sin of Git?',
          choices: ['Not committing regularly', 'Forgetting to create branches', 'Pushing directly onto main'],
          correctAnswer: 2
        }
      ];
  
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