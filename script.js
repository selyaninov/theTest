const button = document.querySelector('.button')
const background = document.querySelector('.wrapper')

function changeColor1() {
    background.style.background = "#aa00ff"
    button.onclick = () => {
        changeColor2()
    }
}

function changeColor2() {
    background.style.background = "yellow"
    button.onclick = () => {
        changeColor1()
    }
}

button.onclick = () => {
    changeColor1()
}

button.addEventListener("click", function(e) {
    animateButton(button);
});

function animateButton(element) {
    element.classList.add('animate__animated', 'animate__flip');
    element.addEventListener('animationend', () => {
        element.classList.remove('animate__animated', 'animate__flip');
    });
}