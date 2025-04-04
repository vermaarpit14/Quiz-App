// DOM element selectors
const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = quizContainer.querySelector(".answer-options");
const nextQuestionBtn = quizContainer.querySelector(".next-question-btn");
const questionStatus = quizContainer.querySelector(".question-status");
const timerDisplay = quizContainer.querySelector(".timer-duration");
const resultContainer = document.querySelector(".result-container");

// Quiz state variables
const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "programming";
let numberOfQuestions = 10;
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswersCount = 0;
let disableSelection = false;

// Sound functions
function playClickSound() {
  try {
    const clickSound = document.getElementById('clickSound');
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(e => console.log("Audio play failed:", e));
    }
  } catch (e) {
    console.log("Sound error:", e);
  }
}

function playQuizOverSound() {
  try {
    const quizOverSound = document.getElementById('quizOverSound');
    if (quizOverSound) {
      quizOverSound.currentTime = 0;
      quizOverSound.play().catch(e => console.log("Quiz over sound failed:", e));
    }
  } catch (e) {
    console.log("Sound error:", e);
  }
}

// Display the quiz result and hide the quiz container
const showQuizResult = () => {
  clearInterval(timer);
  document.querySelector(".quiz-popup").classList.remove("active");
  document.querySelector(".result-popup").classList.add("active");
  const resultText = `You answered <b>${correctAnswersCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Great effort!`;
  resultContainer.querySelector(".result-message").innerHTML = resultText;
  playQuizOverSound(); // Play quiz completion sound
};

// Clear and reset the timer
const resetTimer = () => {
  clearInterval(timer);
  currentTime = QUIZ_TIME_LIMIT;
  timerDisplay.textContent = `${currentTime}s`;
};

// Initialize and start the timer for the current question
const startTimer = () => {
  timer = setInterval(() => {
    currentTime--;
    timerDisplay.textContent = `${currentTime}s`;
    if (currentTime <= 0) {
      clearInterval(timer);
      disableSelection = true;
      nextQuestionBtn.style.visibility = "visible";
      quizContainer.querySelector(".quiz-timer").style.background = "#c31402";
      highlightCorrectAnswer();
      // Disable all answer options after one option is selected
      answerOptions.querySelectorAll(".answer-option").forEach((option) => (option.style.pointerEvents = "none"));
    }
  }, 1000);
};

// Fetch a random question from based on the selected category
const getRandomQuestion = () => {
  const categoryQuestions = questions.find(cat => 
    cat.category.toLowerCase() === quizCategory.toLowerCase()
  )?.questions || [];
  
  if (questionsIndexHistory.length >= Math.min(numberOfQuestions, categoryQuestions.length)) {
    return showQuizResult();
  }

  // Filter out already asked questions
const availableQuestions = categoryQuestions.filter(
  (_, index) =>
    !questionsIndexHistory.includes(index) && !questionsIndexHistory.includes()
); 

  if (availableQuestions.length === 0) {
    return showQuizResult();
  }

  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const randomQuestion = availableQuestions[randomIndex];
  questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
  
  return randomQuestion;
};

// Highlight the correct answer option and add icon
const highlightCorrectAnswer = () => {
  const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
  correctOption.classList.add("correct");
  const iconHTML = `<span class="material-symbols-rounded"> check_circle </span>`;
  correctOption.insertAdjacentHTML("beforeend", iconHTML);
};

// Handle the user's answer selection
const handleAnswer = (option, answerIndex) => {
  if (disableSelection) return;
  playClickSound(); // Play click sound when answering
  clearInterval(timer);
  disableSelection = true;
  const isCorrect = currentQuestion.correctAnswer === answerIndex;
  option.classList.add(isCorrect ? "correct" : "incorrect");
  !isCorrect ? highlightCorrectAnswer() : correctAnswersCount++;
  // Insert icon based on correctness
  const iconHTML = `<span class="material-symbols-rounded"> ${isCorrect ? "check_circle" : "cancel"} </span>`;
  option.insertAdjacentHTML("beforeend", iconHTML);
  // Disable all answer options after one option is selected
  answerOptions.querySelectorAll(".answer-option").forEach((option) => (option.style.pointerEvents = "none"));
  nextQuestionBtn.style.visibility = "visible";
};

// Render the current question and its options in the quiz
const renderQuestion = () => {
  currentQuestion = getRandomQuestion();
  if (!currentQuestion) return;
  disableSelection = false;
  resetTimer();
  startTimer();
  // Update the UI
  nextQuestionBtn.style.visibility = "hidden";
  quizContainer.querySelector(".quiz-timer").style.background = "#32313C";
  quizContainer.querySelector(".question-text").textContent = currentQuestion.question;
  questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;
  answerOptions.innerHTML = "";
  // Create option <li> elements, append them, and add click event listeners
  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.classList.add("answer-option");
    li.textContent = option;
    answerOptions.append(li);
    li.addEventListener("click", () => handleAnswer(li, index));
  });
};

// Start the quiz and render the random question
const startQuiz = () => {
  playClickSound(); // Play click sound when starting quiz
  document.querySelector(".config-popup").classList.remove("active");
  document.querySelector(".quiz-popup").classList.add("active");
  
  // Get the active category button text
  const activeCategory = configContainer.querySelector(".category-option.active").textContent.trim();
  
  // Map the button text to your question categories
  const categoryMap = {
    "C Programming": "C Programming",
    "HTML": "HTML",
    "CSS": "CSS",
    "JavaScript": "JavaScript"
  };
  
  quizCategory = categoryMap[activeCategory];
  numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);
  
  renderQuestion();
};

// Highlight the selected option on click - category or no. of question
configContainer.querySelectorAll(".category-option, .question-option").forEach((option) => {
  option.addEventListener("click", () => {
    playClickSound(); // Play click sound when selecting options
    option.parentNode.querySelector(".active").classList.remove("active");
    option.classList.add("active");
  });
});

// Reset the quiz and return to the configuration container
const resetQuiz = () => {
  playClickSound(); // Play click sound when resetting
  resetTimer();
  correctAnswersCount = 0;
  questionsIndexHistory.length = 0;
  document.querySelector(".config-popup").classList.add("active");
  document.querySelector(".result-popup").classList.remove("active");
};

// Event listeners
nextQuestionBtn.addEventListener("click", () => {
  playClickSound(); // Play click sound for next question
  renderQuestion();
});

resultContainer.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
configContainer.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);

// Initialize audio on first user interaction (for mobile browsers)
document.body.addEventListener('click', function initAudio() {
  // Play and immediately pause to "unlock" audio
  const clickSound = document.getElementById('clickSound');
  if (clickSound) {
    clickSound.play().then(() => {
      clickSound.pause();
      clickSound.currentTime = 0;
    }).catch(e => console.log("Audio init failed:", e));
  }
  document.body.removeEventListener('click', initAudio);
}, { once: true });