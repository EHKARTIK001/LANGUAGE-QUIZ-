const questions = [
  {
    text: "What is the output of print(2 ** 3)?",
    options: ["6", "8", "9", "None"],
    correct: 1, // Index of the correct answer
  },
  {
    text: "Which of these is a mutable data type in Python?",
    options: ["tuple", "list", "int", "str"],
    correct: 1,
  },
  {
    text: "How do you declare a function in Python?",
    options: ["def func():", "function func():", "func() => {}", "lambda func():"],
    correct: 0,
  },
];

export default questions;
function switchQuestion(questionIndex) {
  // Get all quiz questions
  const questions = document.querySelectorAll('.quiz-question');
  
  // Hide all questions
  questions.forEach((question, index) => {
    question.style.display = index === questionIndex ? 'block' : 'none';
  });

  // Update the active state in the sidebar
  const questionListItems = document.querySelectorAll('.question-list li');
  questionListItems.forEach((item, index) => {
    item.classList.toggle('active', index === questionIndex);
  });
}
