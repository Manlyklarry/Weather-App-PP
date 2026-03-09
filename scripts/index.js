const apiKey = "a91bd8d253bb45f3b80211634260203";

const weatherDetails = document.getElementById("weather-details");
const inputCity = document.getElementById("input-city");
const weatherImage = document.getElementById("image");
const origin = document.getElementById("location");
const time = document.getElementById("time");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
showWeatherBtn = document.getElementById("showWeatherBtn");

showWeatherBtn.addEventListener("click", displayWeather);

function displayWeather() {
  const city = inputCity.value;
  if (city === "") {
    alert("Please enter a valid city name to continue");
    return;
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("Data from weatherapi", data);

      if (data.error) {
        alert("Something went wrong, please try again later...");
        return;
      }

      origin.innerHTML =
        "Location: " + data.location.name + ", " + data.location.country;

      time.innerHTML = "Time: " + data.location.localtime;

      temperature.innerHTML = "Temperature: " + data.current.temp_c + "°c";

      condition.innerText = "Condition: " + data.current.condition.text;
    })
    .catch((error) => {
      alert("City name must be provided");
    });
}
