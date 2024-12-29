document.addEventListener("DOMContentLoaded", () => {
    const resultsContainer = document.querySelector(".questions-result");
    const scoreElement = document.getElementById("score");
    const retryButton = document.getElementById("retry-btn");
    const percentageElement = document.getElementById("percentage");
    const navigationContainer = document.querySelector(".question-navigation");

    // Retrieve results from localStorage
    const results = JSON.parse(localStorage.getItem("quizResults"));

    if (!results) {
        resultsContainer.innerHTML = "<p>No results found. Please take the quiz first.</p>";
        return;
    }

    // Calculate score and percentage
    const score = results.filter((result) => result.isCorrect).length;
    const totalQuestions = results.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(2);

    // Display score and percentage
    scoreElement.textContent = `${score} / ${totalQuestions}`;
    percentageElement.textContent = `Percentage: ${percentage}%`;

    // Display each question result and create navigation boxes
    results.forEach((result, index) => {
        const statusClass = result.isCorrect ? "correct" : result.isAttempted ? "incorrect" : "not-attempted";
        
        // Create navigation box
        const navBox = document.createElement("div");
        navBox.classList.add("question-box", statusClass);
        navBox.textContent = index + 1;
        navBox.addEventListener("click", () => {
            showQuestionResult(index);
        });
        navigationContainer.appendChild(navBox);

        // Create question result display
        const questionHtml = `
            <div class="result-item ${statusClass}">
                <h3>Question ${index + 1}: ${result.question}</h3>
                <p>Your Answer: <span class="${statusClass}">${result.userAnswer}</span></p>
                <p>Correct Answer: ${result.correctAnswer}</p>
                <p>Explanation: ${result.explanation}</p>
            </div>
        `;
        resultsContainer.innerHTML += questionHtml;
    });

    // Show only the tapped question result
    function showQuestionResult(index) {
        const allResults = document.querySelectorAll(".result-item");
        allResults.forEach((item, i) => {
            if (i === index) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    // Retry button handler
    retryButton.addEventListener("click", () => {
        localStorage.removeItem("quizResults"); // Clear previous results
        window.location.href = "../quizzes/c.html"; // Redirect to quiz page
    });
});
