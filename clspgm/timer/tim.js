// let countdownInterval;
// let timeLeft = 59; 

// const display = document.getElementById('display');
// const startButton = document.getElementById('start');
// const endButton = document.getElementById('end');

// startButton.addEventListener('click', startCountdown);
// endButton.addEventListener('click', endCountdown);

// function startCountdown() {
//     if (!countdownInterval) {
//         countdownInterval = setInterval(() => {
//             if (timeLeft > 0) {
//                 timeLeft--;
//                 updateDisplay();
//             } else {
//                 clearInterval(countdownInterval);
//                 countdownInterval = null;
//             }
//         }, 1000);
//     }
// }

// function endCountdown() {
//     clearInterval(countdownInterval);
//     countdownInterval = null;
//     timeLeft = 0; 
//     updateDisplay();
// }

// function updateDisplay() {
//     const minutes = Math.floor(timeLeft / 60);
//     const seconds = timeLeft % 60;
//     display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
// }

let countdownInterval;
let timeLeft = 59; 

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const endButton = document.getElementById('end');

startButton.addEventListener('click', startCountdown);
endButton.addEventListener('click', endCountdown);

function startCountdown() {
    if (!countdownInterval) {
        countdownInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(countdownInterval);
                countdownInterval = null;
                updateDisplay();  // Ensure display shows 00:00 when it ends
            }
        }, 1000);
    }
}

function endCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    timeLeft = 0; 
    updateDisplay();  // Ensure the display updates to show 00:00
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Initialize display
updateDisplay();
