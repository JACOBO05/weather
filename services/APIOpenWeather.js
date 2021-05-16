const { apiKey } = require('../config')
const r = new XMLHttpRequest();


export const getWeatherBotoga = async () => {
    r.open("GET", `api.openweathermap.org/data/2.5/weather?q=bogota&appid=${apiKey}`, true);
    r.onreadystatechange = function () {
        if (r.readyState == 4 || r.status == 200) {
            try {
                return Json.parse(r.responseText)
            } catch (error) {
                return
            }
        }
    }
    r.send()
}

