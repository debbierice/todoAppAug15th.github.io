const clock = document.querySelector('.clock h1')
const second = document.querySelector('.clock p')

function getTime() {
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    clock.innerText = `${hour<10 ? `0${hour}`: `${hour}`}:${min<10? `0${min}`: `${min}`}`
    second.innerText = `${sec<10? `0${sec}`: `${sec}`}`
}
setInterval(getTime, 1000)

const imgOnBody = document.querySelector("body")

function loadImage(num) {
    const getImg = new Image();
    getImg.src = `assets/${num}.jpg`
    getImg.classList.add("showImg");
    imgOnBody.appendChild(getImg)

}

function randomNumber() {
    const randomN = Math.floor(Math.random() * 11)
    loadImage(randomN)
}


function init() {
    randomNumber();
}
init()