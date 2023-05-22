const input = document.getElementById("inputName");
const btnWeather = document.querySelector(".btnWeather");
const city = document.getElementById("city");
const img = document.getElementById("imgClima");
const degree = document.getElementById("degree");
const clima = document.querySelector(".clima")

let cityName = "";

btnWeather.addEventListener("click", () => {
    if (!input.value) return;
    cityName = input.value;
    getWeatherData();
})

async function getWeatherData() {
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=pt_br&appid=17a74e4f8c7873360e824e79de3cfdae`

    try {
        await fetch(baseURL)
            .then((res) => res.json())
            .then((data) => {
                if (data?.cod && data.cod === "404") {
                    return alert("Cidade não encontrada");
                }
                loadWeatherInfo(data);
            })
    } catch (error) {
        alert(error);
    }
}
async function getWeatherOnLoad(lat, lon) {
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=17a74e4f8c7873360e824e79de3cfdae`

    try {
        await fetch(baseURL)
            .then((res) => res.json())
            .then((data) => {
                if (data?.cod && data.cod === "404") {
                    return alert("Cidade não encontrada");
                }
                loadWeatherInfo(data);
            })
    } catch (error) {
        alert(error);
    }
}

function loadWeatherInfo(data) {
    let temperatura = (data.main.temp - 273)
    city.innerHTML = `${data.name}, ${data.sys.country}`;
    degree.innerHTML = `Temperatura: ${Math.floor(temperatura)}º C`;
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    clima.style.display = "flex";
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        city.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    getWeatherOnLoad(position.coords.latitude, position.coords.longitude);
}

window.addEventListener("DOMContentLoaded", getLocation)