const quizQuestions = [
  {
    question: "Who is the wife of Thor?",
    options: ["Sif", "Freya", "Gna", "Skadi"],
    correctAnswer: "Sif"
  },
  {
    question: "Thor has blond hair",
    options: ["True", "False"],
    correctAnswer: "False"
  },
  {
    question: "What is the name of the Squirrel on Yggdrasil Tree?",
    correctAnswer: "Ratatoskr","ratatoskr" 
    },
  {
    question: "Thor dies by being poisoned by a serpent",
    options: ["True","False"],
    correctAnswer: "True"
  },
  {
    question: "What is the name of Thor's hammer?",
    correctAnswer: "Mjolnir","mjolnir" },
  {
    question: "Who created Thor's Hammer?",
    options: ["Volundr","Thor","Odin","Brokkr and Sindri"],
    correctAnswer: "Brokkr and Sindri"
  },
  {
    question: "Who survives Ragnarok?",
    options: ["Odin","Vidar","Tyr","Baldr"],
    correctAnswer: "Vidar"
  },
  {
    question: "What is name of Loki's two sons?(Put a comma and then space between the names)",
    correctAnswer: "Fenrir, Narfi","fenrir,narfi"},
  {
    question: "How does Baldur die?",
    options: ["Eaten by Fenrir","Burned by Loki","Hit with Mistletoe","Accidentally hit by Mjolnir"],
    correctAnswer: "Hit with Mistletoe"
  }


];

// Variables to track quiz state
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
  // Hide the start button and display the first question
  document.getElementById("start-button").style.display = "none";
  displayQuestion();
}

// Function to display a question and its options
function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");

  // Clear previous question and answer options
  questionText.innerHTML = "";
  answerButtons.innerHTML = "";

  // Display the current question
  questionText.innerHTML = currentQuestion.question;

  // Create answer buttons for each option
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

    // Add click event listener to check the answer
    button.addEventListener("click", function() {
      checkAnswer(option);
    });
  });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Check if the selected answer is correct
  if (selectedOption === currentQuestion.correctAnswer) {
    score+=4000000;
  }

  // Move to the next question or end the quiz if all questions are answered
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// Function to start the time

// Function to end the quiz
function endQuiz() {  
  // Stop the timer

  // Calculate the score percentage
  const scorePercentage = (score / quizQuestions.length) * 100;

  // Display the final score
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h2> Completed!</h2>
    <p>Your Score: ${score}</p>
    `;
}

// Add event listener to start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", startQuiz);
