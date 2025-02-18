const container = document.getElementById("rain");

const rainEmoji = ["💧"];

let intervalid = null;


function createEmoji() {
    const emoji = document.createElement("span");
    emoji.innerText = rainEmoji[Math.floor(Math.random() * rainEmoji.length)];

    emoji.style.position = "absolute";
    emoji.style.fontSize = "24px";
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = "-50px";

    container.appendChild(emoji);

    let speed = Math.random() * 2 + 1;
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
    if (!intervalid) {
        intervalid = setInterval(createEmoji, 300);
    } else {
        clearInterval(intervalid);
        intervalid = null;
    }
}

document.getElementById("cloudbtn").addEventListener("click", clickCloud);