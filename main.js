let startTime = 85;

const timerElement = document.getElementById("timer");

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer(duration) {
    let timeLeft = duration;

    timerElement.textContent = formatTime(timeLeft);

    const interval = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(interval);
            timerElement.textContent = "00:00";
        } else {
            timerElement.textContent = formatTime(timeLeft);
        }
    }, 1000);
}

startTimer(startTime);