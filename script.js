function showSignInPage() {
  document.querySelector('.hero').style.display = 'none';
  document.querySelector('.features').style.display = 'none';
  document.querySelector('.signin-page').classList.add('active');
}

function showDashboard() {
  document.querySelector('.signin-page').classList.remove('active');
  document.querySelector('.dashboard').classList.add('active');
}

function showCourseOptions(course) {
  document.querySelector('.dashboard').classList.remove('active');
  document.querySelector('.course-options').classList.add('active');
  document.querySelector('.course-options h2').textContent = `${course} Options`;
}

function showQuizPage() {
  document.querySelector('.course-options').classList.remove('active');
  document.querySelector('.quiz-page').classList.add('active');
}

function showLecturePage() {
  document.querySelector('.course-options').classList.remove('active');
  document.querySelector('.lecture-page').classList.add('active');
}

function showExamplesPage() {
  document.querySelector('.course-options').classList.remove('active');
  document.querySelector('.examples-page').classList.add('active');
}

function checkAnswer(questionNumber, correctAnswer) {
  const userAnswer = document.getElementById(`answer-${questionNumber}`).value;
  const resultElement = document.getElementById(`result-${questionNumber}`);

  if (userAnswer === correctAnswer) {
      resultElement.textContent = "Correct!";
      resultElement.style.color = "green";
  } else {
      resultElement.textContent = "Incorrect, try again!";
      resultElement.style.color = "red";
  }
}

function toggleAnswer(answerId) {
  const answerElement = document.getElementById(answerId);
  answerElement.style.display = answerElement.style.display === "none" ? "block" : "none";
}
