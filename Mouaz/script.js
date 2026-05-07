const textElement = document.querySelector(".typing-text");
const strText = textElement.textContent;
textElement.textContent = "";
const splitText = strText.split("");

for (let i = 0; i < splitText.length; i++) {
    textElement.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = textElement.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length) {
        clearInterval(timer);
        timer = null;
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-right');
hiddenElements.forEach((el) => observer.observe(el));