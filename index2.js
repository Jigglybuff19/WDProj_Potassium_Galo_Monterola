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
    options: ["Ratatoskr","Nidhogg","Garmr","Hugin"],
    correctAnswer: "Ratatoskr"
  },
  {
    question: "Thor dies by being poisoned by a serpent",
    options: ["True","False"],
    correctAnswer: "True"
  },
  {
    question: "What is the name of Thor's hammer?",
    options: ["Gungnir","Draupnir","Mjolnir","Skofnung"],
    correctAnswer: "Mjolnir"
  },
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
    options: ["Fenrir and Narfi","Jormungandr and Hel","Sleipnir and Garmr","Vali and Modi"],
    correctAnswer: "Fenrir and Narfi"
  },
  {
    question: "How does Baldur die?",
    options: ["Eaten by Fenrir","Burned by Loki","Hit with Mistletoe","Accidentally hit by Mjolnir"],
    correctAnswer: "Hit with Mistletoe"
  },
  {
    question: "Odin lost his eye by fighting Ymir to create the world",
    options: ["True","False"],
    correctAnswer: "False"
  },
  {
    question: "Where do warriors who die in battle go?",
    options: ["Valhalla","Helheim","Underworld","Niflheim"],
    correctAnswer: "Valhalla"
  },
  {
    question: "How many realms are there in Norse Mythology?",
    options: ["6","10","9","12"],
    correctAnswer: "9"
  },
  {
    question: "'What day is named after Odin'?",
    options: ["Monday","Friday","Wednesday","Thursday"],
    correctAnswer: "Wednesday"
  },
  {
    question: "One of Loki's children is a cow",
    options: ["True","False"],
    correctAnswer: "False"
  },
  {
    question: "Loki has relations with a horse",
    options: ["True","False"],
    correctAnswer: "True"
  },
  {
    question: "What title does Odin commonly go by?",
    options: ["Allfather","The Wanderer","The Wise One","The One-Eyed"],
    correctAnswer: "Allfather"
  },
  {
    question: "What is the name of the world serpent?",
    options: ["Fenrir","Jormungandr","Nidhogg","Garmr"],
    correctAnswer: "Jormungandr"
  },
  {
    question: "What do you call the group of female figures who lead the dead to Valhalla?",
    options: ["Valkyries","Norns","Disir","Furies"],
    correctAnswer: "Valkyries"
  },
  {
    question: "Who is the biggest giant in Norse Mythology?",
    options: ["Hrungnir","Surtr","Thrym","Ymir"],
    correctAnswer: "Ymir"
  },
  {
    question: "Odin kills Ymir along with his sisters to create the world",
    options: ["True", "False"],
    correctAnswer: "False"
  },
  {
    question: "What event would known as the death of the Gods?",
    options: ["Ragnarok","Fimbulwinter","Rapture","The Twilight of the Gods"],
    correctAnswer: "Ragnarok"
  },
  {
    question: "Who defends Asgard during Ragnarok",
    options: ["Heimdall","Vidar","Magni","Tyr"],
    correctAnswer: "Heimdall"
  },
  {
    question: "Odin has two eagles that fly around the world to gather information for him",
    options: ["True","False"],
    correctAnswer: "False"
  },
  {
    question: "Odin dies by being eaten ____",
    options: ["by Fenrir","by Jormungandr","by Surtr","by Nidhogg"],
    correctAnswer: "by Fenrir"
  },
  {
    question: "What happened after Ragnarok?",
    options: ["The world ends forever","A new world rises", "The giants take over","The valkyries rule the world"],
    correctAnswer: "A new world rises"
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
  function endQuiz() {  
  // Stop the timer

  // Calculate the score percentage
  const scorePercentage = (score / quizQuestions.length) * 100;

  // Display the final score
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h2> Completed!</h2>
    <p> Your Final Score is: ${score.toLocaleString("en-US")} </p>
    <p> Maximum Score: 100,000,000</p>
    `;
  }

// Add event listener to start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", startQuiz);
