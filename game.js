//Variablen und Herkunft
const startButton = document.getElementById("startButton");
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let isJumping = false;
let gameLoop;

// Sart des Spiels
function startGame() {
    startButton.style.display = "none"; // Hide the start button
    gameLoop = setInterval(() => {
        moveCactus();
        checkCollision();
    }, 20);
}

// Sprung des Dinos
function jump() {
    if (isJumping) return; // Prevent double jump
    isJumping = true;

    let upInterval = setInterval(() => {
        let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
        if (dinoBottom >= 95) {
            clearInterval(upInterval);
            // Fall down
            let downInterval = setInterval(() => {
                if (dinoBottom <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    dinoBottom -= 5;
                    dino.style.bottom = dinoBottom + "px";
                }
            }, 20);
        } else {
            dinoBottom += 5;
            dino.style.bottom = dinoBottom + "px";
        }
    }, 20);
}

// Bewegung des Kaktus
function moveCactus() {
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < -20) {
        cactus.style.left = "100%";
    } else {
        cactus.style.left = cactusLeft - 5 + "px";
    }
}

// Kollisionserkennung
function checkCollision() {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft > 50 && cactusLeft < 90 && dinoBottom <= 40) {
        alert("Game Over!");
        clearInterval(gameLoop);
    }
}

// Leerzeichen zum Springen
document.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        event.preventDefault(); // Prevent spacebar from scrolling
        jump();
    }
});
//Start button
startButton.addEventListener("click", startGame);