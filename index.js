const apiKey = "d439cd0e672c067eff29994a5ae67821"

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("colaboration").classList.remove("position-absolute")
    } else {
        document.getElementById("colaboration").classList.add("position-absolute")
    }
}

var x = window.matchMedia("(max-width: 960px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)

function getWeather(url, callback) {
    var http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            try {
                var data = JSON.parse(http.responseText);
            } catch (error) {
                return error
            }
            callback(data)
        }
    };
    http.send();
}

getWeather(`http://api.openweathermap.org/data/2.5/weather?q=bogota&appid=${apiKey}`, (data) => {
    document.getElementById("weatherBogota").innerHTML = Math.round(data.main.temp - 273.15) + '<sup>&#8451;</sup>'
    document.getElementById("iconBogota").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
})

getWeather(`http://api.openweathermap.org/data/2.5/weather?q=lyon&appid=${apiKey}`, (data) => {
    document.getElementById("weatherLyon").innerHTML = Math.round(data.main.temp - 273.15) + '<sup>&#8451;</sup>'
    document.getElementById("iconLyon").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    document.getElementById("humidityLyon").innerHTML = data.main.humidity + '%'
    document.getElementById("speedLyon").innerHTML = data.wind.speed + ' km/h'
})

getWeather(`http://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}`, (data) => {
    document.getElementById("weatherParis").innerHTML = Math.round(data.main.temp - 273.15) + '<sup>&#8451;</sup>'
    document.getElementById("iconParis").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    document.getElementById("humidityParis").innerHTML = data.main.humidity + '%'
    document.getElementById("speedParis").innerHTML = data.wind.speed + ' km/h'
    document.getElementById("nameParis").innerHTML = data.name
})

// WEATHER DAYS
const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

const day = new Date()

getWeather(`http://api.openweathermap.org/data/2.5/forecast?q=bogota&appid=${apiKey}`, (data) => {
    document.getElementById("icon1").src = `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
    document.getElementById("weather1").innerHTML = Math.round(data.list[0].main.temp_min - 273.15) + '<sup>&#8451;</sup>/' + Math.round(data.list[0].main.temp_max - 273.15) + '<sup>&#8451;</sup>'
    document.getElementById("name1").innerHTML =  dias[new Date(data.list[0].dt_txt).getDay()]
    document.getElementById("status1").innerHTML = data.list[0].weather[0].main

    document.getElementById("icon2").src = `http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`
    document.getElementById("weather2").innerHTML = Math.round(data.list[8].main.temp_min - 273.15) + '<sup>&#8451;</sup>/' + Math.round(data.list[8].main.temp_max - 273.15) + '<sup>&#8451;</sup>'
    document.getElementById("name2").innerHTML = dias[new Date(data.list[8].dt_txt).getDay()]
    document.getElementById("status2").innerHTML = data.list[8].weather[0].main

    document.getElementById("icon3").src = `http://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`
    document.getElementById("weather3").innerHTML = Math.round(data.list[16].main.temp_min - 273.15) + '<sup>&#8451;</sup>/' + Math.round(data.list[16].main.temp_max - 273.15) + '<sup>&#8451;</sup>'
    document.getElementById("name3").innerHTML = dias[new Date(data.list[16].dt_txt).getDay()]
    document.getElementById("status3").innerHTML = data.list[16].weather[0].main
})