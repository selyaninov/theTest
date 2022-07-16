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