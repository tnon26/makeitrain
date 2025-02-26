const container = document.getElementById("rain");

const rainEmoji = ["💧"];

let intervalId = null;


function createEmoji() {
    const emoji = document.createElement("span");
    emoji.innerText = rainEmoji;

    emoji.style.position = "absolute";
    emoji.style.fontSize = "24px";
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = "-50px";

    container.appendChild(emoji);

    let speed = Math.random() * 4 + 1;
    let position = 0;

    function fall() {
        if (position < window.innerHeight) {
            position += speed;
            emoji.style.transform = `translateY(${position}px)`;
            requestAnimationFrame(fall);
        } else {
            emoji.remove();
        }
    }

    fall();
}

function clickCloud () {
    if (intervalId === null) {
        intervalId = setInterval(createEmoji, 100);
    } else {
        clearInterval(intervalId);
        intervalId = null;
    }
}

document.getElementById("cloudbtn").addEventListener("click", clickCloud);
