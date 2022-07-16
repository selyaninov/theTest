const button = document.querySelector('.button')
const whell = document.querySelector('.whell')
const background = document.querySelector('#container1')
const buttonWhell = document.querySelector('#buttonWhell')

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

buttonWhell.onclick = () => {
    whell.classList.toggle('rotate')
}