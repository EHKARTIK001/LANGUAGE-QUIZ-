document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.querySelector("#quiz-form");
  const resultsContainer = document.getElementById("results");

  if (!quizForm || !resultsContainer) {
    console.error("Quiz form or results container not found!");
    return;
  }

  // Example questions (for Python)
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

  // Populate the form with questions
  questions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("quiz-question");

    let optionsHTML = "";
    question.options.forEach((option, optIndex) => {
      optionsHTML += `
        <label>
          <input type="radio" name="q${index}" value="${optIndex}">
          ${option}
        </label>
        <br>
      `;
    });

    questionElement.innerHTML = `
      <h3>Question ${index + 1}: ${question.text}</h3>
      ${optionsHTML}
    `;
    quizForm.appendChild(questionElement);
  });

  // Add submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "btn";
  submitButton.textContent = "Submit";
  quizForm.appendChild(submitButton);

  // Handle form submission
  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let score = 0;
    let feedback = "";

    questions.forEach((question, index) => {
      const selected = quizForm[`q${index}`]?.value;
      const correctAnswer = question.options[question.correct];

      if (parseInt(selected, 10) === question.correct) {
        score++;
        feedback += `<p>Question ${index + 1}: Correct!</p>`;
      } else {
        feedback += `<p>Question ${index + 1}: Incorrect. Correct answer is "${correctAnswer}".</p>`;
      }
    });

    resultsContainer.innerHTML = `
      <p>You scored ${score} out of ${questions.length}.</p>
      ${feedback}
    `;
  });
});
