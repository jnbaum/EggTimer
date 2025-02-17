document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("startButton");
    const timerDisplay = document.getElementById("timer");

    // Define countdown durations for different pages
    const pageTimers = {
        "startTimer1": 180,
        "startTimer2": 240, 
        "startTimer3": 300,
        "startTimer4": 360
    };

    // Get current page name
    const page = window.location.pathname.split("/").pop();
    const countdownDuration = pageTimers[page] || 15; // Default to 15s if page not listed

    let countdown; // Variable to store countdown interval

    button.addEventListener("click", function () {
        let timeLeft = countdownDuration;

        // Clear any existing countdown
        clearInterval(countdown);

        // Start countdown
        countdown = setInterval(function () {
            timerDisplay.textContent = `${timeLeft}`;
            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(countdown);
                timerDisplay.textContent = "Ice bath time!";
            }
        }, 1000);
    });
});
