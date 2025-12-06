// Quiz Scoring Function
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Score Display
    updateScoreDisplay();

    // Label Suspicious Elements
    const phishElements = document.querySelectorAll('.phish-trigger');

    // Add click listeners
    phishElements.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault(); 

            // Check if this specific item has already been clicked
            if (element.classList.contains('found')) {
                alert("You already found this red flag!");
                return;
            }

            // Mark as found
            element.classList.add('found');
            element.style.border = "2px solid red";
            element.style.backgroundColor = "rgba(76, 213, 255, 0.5)";

            // Add Points
            addPoints(1);
            alert("Good eye! That is a phishing indicator.");
        });
    });
});

// Add Points Function
function addPoints(amount) {
    // Get current score from storage (defaults to 0 if none exists)
    let currentScore = parseInt(sessionStorage.getItem('quizScore')) || 0;
    
    // Update score
    currentScore += amount;
    
    // Save back to storage
    sessionStorage.setItem('quizScore', currentScore);
    
    // Update the screen
    updateScoreDisplay();
}

// Display Score Function
function updateScoreDisplay() {
    const scoreSpan = document.getElementById('score-board');
    if (scoreSpan) {
        let currentScore = sessionStorage.getItem('quizScore') || 0;
        scoreSpan.innerText = currentScore;
    }
}

// Prevent click from opening link
    document.addEventListener('DOMContentLoaded', function() {
        // Select the link wrapping the image
        var phishLink = document.querySelector('.simulatedLink');
        
        if (phishLink) {
            phishLink.addEventListener('click', function(event) {
                // This stops the browser from following the link
                event.preventDefault(); 
                
                // Optional: You can add an alert or log the click here
                console.log("Phishing link click intercepted!");
            });
        }
    });