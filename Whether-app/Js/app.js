//html elements

const apikey = '683b281f59d954120c6c1406d3ba65f2';
const body = document.querySelector("body");
const cityValue = document.querySelector(".city-value");
const submitCity = document.querySelector(".submit");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const dataIcon = document.querySelector(".icon");
const describ = document.getElementById("describ");

//weather detalis
const cloudy = document.querySelector(".cloudy-res");
const humidity = document.querySelector(".humidity-res");
const windSpeed = document.querySelector(".wind-res");

//error message
const errorDiv = document.querySelector(".error-container");

//city suggestion
const newyork = document.getElementById("new-york");
const rasht = document.getElementById("rasht");
const paris = document.getElementById("paris");
const california = document.getElementById("california");

// all classes to change the background
const backgroundClass = ["body-clear-sky", "body-few-cloud", "body-cloud", "body-rain", "body-thunder", "body-snow", "body-few-cloud", ]



//main function
const weatherHandler = () => {

    if (cityValue.value.length === 0) {
        errorDiv.style.top = "0";
        setTimeout(() => { errorDiv.style.top = "-255px"; }, 3000);
    } else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue.value}&appid=${apikey}`)
            .then(response => response.json())
            .then(data => {
                const { main, name, weather, wind } = data;
                temp.innerHTML = Math.round(main.temp - 273.15) + "°";
                city.innerHTML = data.name;
                describ.innerHTML = data.weather[0].description;
                cloudy.innerHTML = data.clouds.all + "%";
                humidity.innerHTML = main.humidity + "%";
                windSpeed.innerHTML = Math.round(wind.speed * 3 / 6) + "km/h";
                cityValue.value = " ";
                cityValue.placeholder = "Another location";
                // this sesion change background with difrent description
                if (describ.innerHTML === "clear sky") {
                    dataIcon.src = "Icon/64x64/day/113.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-clear-sky");
                } else if (describ.innerHTML === "few clouds") {
                    dataIcon.src = "Icon/64x64/day/116.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-few-cloud");
                } else if (describ.innerHTML === "scattered clouds") {
                    dataIcon.src = "Icon/64x64/day/119.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-cloud");
                } else if (describ.innerHTML === "broken clouds") {
                    dataIcon.src = "Icon/64x64/day/122.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-cloud");
                } else if (describ.innerHTML === "shower rain") {
                    dataIcon.src = "Icon/64x64/day/266.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-rain");
                } else if (describ.innerHTML === "rain") {
                    dataIcon.src = "Icon/64x64/day/293.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-rain");
                } else if (describ.innerHTML === "thunderstorm") {
                    dataIcon.src = "Icon/64x64/day/389.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-thunder");
                } else if (describ.innerHTML === "snow") {
                    dataIcon.src = "Icon/64x64/day/338.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-snow");
                } else if (describ.innerHTML === "mist") {
                    dataIcon.src = "Icon/64x64/day/260.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-few-cloud");
                } else if (describ.innerHTML === "thunderstorm with light rain") {
                    dataIcon.src = "Icon/64x64/day/359.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-rain");
                } else if (describ.innerHTML === "light thunderstorm") {
                    dataIcon.src = "Icon/64x64/day/386.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-thunder");
                } else if (describ.innerHTML === "drizzle") {
                    dataIcon.src = "Icon/64x64/day/353.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-rain");
                } else if (describ.innerHTML === "light rain") {
                    dataIcon.src = "Icon/64x64/day/353.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-rain");
                } else if (describ.innerHTML === "ragged shower rain") {
                    dataIcon.src = "Icon/64x64/day/359.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-rain");
                } else if (describ.innerHTML === "light snow") {
                    dataIcon.src = "Icon/64x64/day/350.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-snow");
                } else if (describ.innerHTML === "Heavy snow") {
                    dataIcon.src = "Icon/64x64/day/230.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-snow");
                } else if (describ.innerHTML === "Light rain and snow") {
                    dataIcon.src = "Icon/64x64/day/317.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-rain");
                } else if (describ.innerHTML === "overcast clouds") {
                    dataIcon.src = "Icon/64x64/day/260.png";
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-thunder");
                } else {
                    body.classList.remove(...backgroundClass);
                    body.classList.add("body-few-cloud");
                }
            })
            .catch(() => {
                errorDiv.style.top = "0";
                setTimeout(() => { errorDiv.style.top = "-255px"; }, 3000);
                return;
            });
    }
};

// search button
submitCity.addEventListener("click", () => {
    return weatherHandler();
});

// can send fetch with any key up
cityValue.addEventListener("change", () => {
    return weatherHandler();
});

//error handler

errorDiv.addEventListener("click", () => {
    errorDiv.style.top = "-255px";
})



// suggestio city handler

newyork.addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=new york&appid=${apikey}`)
        .then(response => response.json())
        .then(data => {
            const { main, name, weather, wind } = data;
            temp.innerHTML = Math.round(main.temp - 273.15) + "°";
            city.innerHTML = data.name;
            describ.innerHTML = data.weather[0].description;
            cloudy.innerHTML = data.clouds.all + "%";
            humidity.innerHTML = main.humidity + "%";
            windSpeed.innerHTML = Math.round(wind.speed * 3 / 6) + "km/h";
            if (describ.innerHTML === "clear sky") {
                dataIcon.src = "Icon/64x64/day/113.png";
                body.classList.add("body-clear-sky");
            } else if (describ.innerHTML === "few clouds") {
                dataIcon.src = "Icon/64x64/day/116.png";
                body.classList.add("body-few-cloud");
            } else if (describ.innerHTML === "scattered clouds") {
                dataIcon.src = "Icon/64x64/day/119.png";
                body.classList.add("body-cloud");
            } else if (describ.innerHTML === "broken clouds") {
                dataIcon.src = "Icon/64x64/day/122.png";
                body.classList.add("body-cloud");
            } else if (describ.innerHTML === "shower rain") {
                dataIcon.src = "Icon/64x64/day/266.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "rain") {
                dataIcon.src = "Icon/64x64/day/293.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "thunderstorm") {
                dataIcon.src = "Icon/64x64/day/389.png";
                body.classList.add("body-thunder");
            } else if (describ.innerHTML === "snow") {
                dataIcon.src = "Icon/64x64/day/338.png";
                body.classList.add("body-snow");
            } else if (describ.innerHTML === "mist") {
                dataIcon.src = "Icon/64x64/day/260.png";
                body.classList.add("body-few-cloud");
            } else if (describ.innerHTML === "thunderstorm with light rain") {
                dataIcon.src = "Icon/64x64/day/359.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "light thunderstorm") {
                dataIcon.src = "Icon/64x64/day/386.png";
                body.classList.add("body-thunder");
            } else if (describ.innerHTML === "drizzle") {
                dataIcon.src = "Icon/64x64/day/353.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "light rain") {
                dataIcon.src = "Icon/64x64/day/353.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "ragged shower rain") {
                dataIcon.src = "Icon/64x64/day/359.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "light snow") {
                dataIcon.src = "Icon/64x64/day/350.png";
                body.classList.add("body-snow");
            } else if (describ.innerHTML === "Heavy snow") {
                dataIcon.src = "Icon/64x64/day/230.png";
                body.classList.add("body-snow");
            } else if (describ.innerHTML === "Light rain and snow") {
                dataIcon.src = "Icon/64x64/day/317.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "overcast clouds") {
                dataIcon.src = "Icon/64x64/day/260.png";
                body.classList.add("body-thunder");
            } else {
                body.classList.add("body-few-cloud");
            }
        })
        .catch(() => {
            errorDiv.style.top = "0";
            return;
        });
})

rasht.addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=rasht&appid=${apikey}`)
        .then(response => response.json())
        .then(data => {
            const { main, name, weather, wind } = data;
            temp.innerHTML = Math.round(main.temp - 273.15) + "°";
            city.innerHTML = data.name;
            describ.innerHTML = data.weather[0].description;
            cloudy.innerHTML = data.clouds.all + "%";
            humidity.innerHTML = main.humidity + "%";
            windSpeed.innerHTML = Math.round(wind.speed * 3 / 6) + "km/h";
            if (describ.innerHTML === "clear sky") {
                dataIcon.src = "Icon/64x64/day/113.png";
                body.classList.add("body-clear-sky");
            } else if (describ.innerHTML === "few clouds") {
                dataIcon.src = "Icon/64x64/day/116.png";
                body.classList.add("body-few-cloud");
            } else if (describ.innerHTML === "scattered clouds") {
                dataIcon.src = "Icon/64x64/day/119.png";
                body.classList.add("body-cloud");
            } else if (describ.innerHTML === "broken clouds") {
                dataIcon.src = "Icon/64x64/day/122.png";
                body.classList.add("body-cloud");
            } else if (describ.innerHTML === "shower rain") {
                dataIcon.src = "Icon/64x64/day/266.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "rain") {
                dataIcon.src = "Icon/64x64/day/293.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "thunderstorm") {
                dataIcon.src = "Icon/64x64/day/389.png";
                body.classList.add("body-thunder");
            } else if (describ.innerHTML === "snow") {
                dataIcon.src = "Icon/64x64/day/338.png";
                body.classList.add("body-snow");
            } else if (describ.innerHTML === "mist") {
                dataIcon.src = "Icon/64x64/day/260.png";
                body.classList.add("body-few-cloud");
            } else if (describ.innerHTML === "thunderstorm with light rain") {
                dataIcon.src = "Icon/64x64/day/359.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "light thunderstorm") {
                dataIcon.src = "Icon/64x64/day/386.png";
                body.classList.add("body-thunder");
            } else if (describ.innerHTML === "drizzle") {
                dataIcon.src = "Icon/64x64/day/353.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "light rain") {
                dataIcon.src = "Icon/64x64/day/353.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "ragged shower rain") {
                dataIcon.src = "Icon/64x64/day/359.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "light snow") {
                dataIcon.src = "Icon/64x64/day/350.png";
                body.classList.add("body-snow");
            } else if (describ.innerHTML === "Heavy snow") {
                dataIcon.src = "Icon/64x64/day/230.png";
                body.classList.add("body-snow");
            } else if (describ.innerHTML === "Light rain and snow") {
                dataIcon.src = "Icon/64x64/day/317.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "overcast clouds") {
                dataIcon.src = "Icon/64x64/day/260.png";
                body.classList.add("body-thunder");
            } else {
                body.classList.add("body-few-cloud");
            }
        })
        .catch(() => {
            errorDiv.style.top = "0";
            return;
        });
})
paris.addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apikey}`)
        .then(response => response.json())
        .then(data => {
            const { main, name, weather, wind } = data;
            temp.innerHTML = Math.round(main.temp - 273.15) + "°";
            city.innerHTML = data.name;
            describ.innerHTML = data.weather[0].description;
            cloudy.innerHTML = data.clouds.all + "%";
            humidity.innerHTML = main.humidity + "%";
            windSpeed.innerHTML = Math.round(wind.speed * 3 / 6) + "km/h";
            if (describ.innerHTML === "clear sky") {
                dataIcon.src = "Icon/64x64/day/113.png";
                body.classList.add("body-clear-sky");
            } else if (describ.innerHTML === "few clouds") {
                dataIcon.src = "Icon/64x64/day/116.png";
                body.classList.add("body-few-cloud");
            } else if (describ.innerHTML === "scattered clouds") {
                dataIcon.src = "Icon/64x64/day/119.png";
                body.classList.add("body-cloud");
            } else if (describ.innerHTML === "broken clouds") {
                dataIcon.src = "Icon/64x64/day/122.png";
                body.classList.add("body-cloud");
            } else if (describ.innerHTML === "shower rain") {
                dataIcon.src = "Icon/64x64/day/266.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "rain") {
                dataIcon.src = "Icon/64x64/day/293.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "thunderstorm") {
                dataIcon.src = "Icon/64x64/day/389.png";
                body.classList.add("body-thunder");
            } else if (describ.innerHTML === "snow") {
                dataIcon.src = "Icon/64x64/day/338.png";
                body.classList.add("body-snow");
            } else if (describ.innerHTML === "mist") {
                dataIcon.src = "Icon/64x64/day/260.png";
                body.classList.add("body-few-cloud");
            } else if (describ.innerHTML === "thunderstorm with light rain") {
                dataIcon.src = "Icon/64x64/day/359.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "light thunderstorm") {
                dataIcon.src = "Icon/64x64/day/386.png";
                body.classList.add("body-thunder");
            } else if (describ.innerHTML === "drizzle") {
                dataIcon.src = "Icon/64x64/day/353.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "light rain") {
                dataIcon.src = "Icon/64x64/day/353.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "ragged shower rain") {
                dataIcon.src = "Icon/64x64/day/359.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "light snow") {
                dataIcon.src = "Icon/64x64/day/350.png";
                body.classList.add("body-snow");
            } else if (describ.innerHTML === "Heavy snow") {
                dataIcon.src = "Icon/64x64/day/230.png";
                body.classList.add("body-snow");
            } else if (describ.innerHTML === "Light rain and snow") {
                dataIcon.src = "Icon/64x64/day/317.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "overcast clouds") {
                dataIcon.src = "Icon/64x64/day/260.png";
                body.classList.add("body-thunder");
            } else {
                body.classList.add("body-few-cloud");
            }
        })
        .catch(() => {
            errorDiv.style.top = "0";
            return;
        });
})
california.addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=california&appid=${apikey}`)
        .then(response => response.json())
        .then(data => {
            const { main, name, weather, wind } = data;
            temp.innerHTML = Math.round(main.temp - 273.15) + "°";
            city.innerHTML = data.name;
            describ.innerHTML = data.weather[0].description;
            cloudy.innerHTML = data.clouds.all + "%";
            humidity.innerHTML = main.humidity + "%";
            windSpeed.innerHTML = Math.round(wind.speed * 3 / 6) + "km/h";
            if (describ.innerHTML === "clear sky") {
                dataIcon.src = "Icon/64x64/day/113.png";
                body.classList.add("body-clear-sky");
            } else if (describ.innerHTML === "few clouds") {
                dataIcon.src = "Icon/64x64/day/116.png";
                body.classList.add("body-few-cloud");
            } else if (describ.innerHTML === "scattered clouds") {
                dataIcon.src = "Icon/64x64/day/119.png";
                body.classList.add("body-cloud");
            } else if (describ.innerHTML === "broken clouds") {
                dataIcon.src = "Icon/64x64/day/122.png";
                body.classList.add("body-cloud");
            } else if (describ.innerHTML === "shower rain") {
                dataIcon.src = "Icon/64x64/day/266.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "rain") {
                dataIcon.src = "Icon/64x64/day/293.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "thunderstorm") {
                dataIcon.src = "Icon/64x64/day/389.png";
                body.classList.add("body-thunder");
            } else if (describ.innerHTML === "snow") {
                dataIcon.src = "Icon/64x64/day/338.png";
                body.classList.add("body-snow");
            } else if (describ.innerHTML === "mist") {
                dataIcon.src = "Icon/64x64/day/260.png";
                body.classList.add("body-few-cloud");
            } else if (describ.innerHTML === "thunderstorm with light rain") {
                dataIcon.src = "Icon/64x64/day/359.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "light thunderstorm") {
                dataIcon.src = "Icon/64x64/day/386.png";
                body.classList.add("body-thunder");
            } else if (describ.innerHTML === "drizzle") {
                dataIcon.src = "Icon/64x64/day/353.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "light rain") {
                dataIcon.src = "Icon/64x64/day/353.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "ragged shower rain") {
                dataIcon.src = "Icon/64x64/day/359.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "light snow") {
                dataIcon.src = "Icon/64x64/day/350.png";
                body.classList.add("body-snow");
            } else if (describ.innerHTML === "Heavy snow") {
                dataIcon.src = "Icon/64x64/day/230.png";
                body.classList.add("body-snow");
            } else if (describ.innerHTML === "Light rain and snow") {
                dataIcon.src = "Icon/64x64/day/317.png";
                body.classList.add("body-rain");
            } else if (describ.innerHTML === "overcast clouds") {
                dataIcon.src = "Icon/64x64/day/260.png";
                body.classList.add("body-thunder");
            } else {
                body.classList.add("body-few-cloud");
            }
        })
        .catch(() => {
            errorDiv.style.top = "0";
            return;
        });
})