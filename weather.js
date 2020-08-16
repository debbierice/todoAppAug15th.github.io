const API_KEY = `a47c34cd33087c09120130b5f0247125`
const COORDS_LS = "My geo location"
const temp = document.querySelector(".temp")
const icon = document.querySelector(".icon")
const description = document.querySelector('.description')
const myLocation = document.querySelector('.my-location')

function getWeather(lat, long) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            const temper = json.main.temp;
            const place = json.name;
            const descript = json.weather[0].description
            const id = json.weather[0].icon
            const iconURL = `http://openweathermap.org/img/wn/${id}@2x.png`
            temp.innerText = `${temper}℃`
            icon.setAttribute('src', iconURL)
            description.innerText= `${descript}`
            myLocation.innerText= `in ${place}` 
        })
}

function saveToLocalstorage(text) {
    localStorage.setItem(COORDS_LS, JSON.stringify(text))
}

function whenItLoads(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude
    const coordsObj = {
        latitude,
        longitude
    }
    saveToLocalstorage(coordsObj)
    getWeather(latitude, longitude)
}

function whenItFails() {
    console.log(`cannot access to your current location`)
}

function askForLoadCoords() {
    navigator.geolocation.getCurrentPosition(whenItLoads, whenItFails)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS_LS)
    if (loadedCoords === null) {
        askForLoadCoords()
    } else {
        const parseCoords = JSON.parse(loadedCoords)
        getWeather(parseCoords.latitude, parseCoords.longitude)

    }

}

function init() {
    loadCoords();
}
init();