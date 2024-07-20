function checkAnswer(riddleNumber, correctAnswer) {
    const userAnswer = document.getElementById(`answer${riddleNumber}`).value.trim();
    const messageElement = document.getElementById(`message${riddleNumber}`);
    const nextButton = document.getElementById(`next${riddleNumber}`);
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        messageElement.textContent = 'Correct! Well done.';
        nextButton.style.display = 'inline-block';
    } else {
        messageElement.textContent = 'Incorrect answer. Try again!';
        nextButton.style.display = 'none';
    }
}

function nextRiddle(currentRiddle) {
    document.getElementById(`riddle${currentRiddle}`).style.display = 'none';
    const nextRiddle = document.getElementById(`riddle${currentRiddle + 1}`);
    if (nextRiddle) {
        nextRiddle.style.display = 'block';
    } else {
        document.getElementById('completion').style.display = 'block';
    }
}

function showCompletionForTesting() {
    document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
    document.getElementById('completion').style.display = 'block';
}

// Call this function to jump directly to the completion page
showCompletionForTesting();

