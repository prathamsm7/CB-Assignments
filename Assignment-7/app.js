const input = document.getElementById("input");
const cityName = document.getElementById("city");
const notFound = document.getElementById("notFound");

const country = document.getElementById("country");
const dt = document.getElementById("date");
const temp = document.getElementById("temp");
const minMax = document.getElementById("min-max");
const weather = document.getElementById("weather");
const image = document.getElementById("img");

window.addEventListener("load", () => {
  console.log("window is loaded");

  searchCity("mumbai");
  console.log("mumbai city temp is loaded");

  cityName.innerText = "Mumbai";
});

const searchCity = async (city) => {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=84efe066bd7d803b9de3b4e8f4b48b39`;

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=84efe066bd7d803b9de3b4e8f4b48b39`;

    let today = new Date();
    let date = today.toDateString();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var datetime = `${date}  ${time}`;
    console.log(datetime);

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    cityName.innerText = data.name;
    country.innerText = data.sys.country;
    dt.innerText = datetime;
    temp.innerText = `${data.main.temp}°c`;

    minMax.innerText = `Humidity:${data.main.humidity}% | Min :${data.main.temp_min}°c | Max:${data.main.temp_max}°c`;
    weather.innerText = data.weather[0].main;

    const icon = data.weather[0].icon;
    console.log(icon);
    image.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${icon}@2x.png`
    );
  } catch (err) {
    cityName.innerText = "";
    country.innerText = "";
    dt.innerText = "";
    temp.innerText = "";
    minMax.innerText = "";
    weather.innerText = "";
    image.setAttribute("src", ``);
  }
};

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchCity(input.value);
  }
});
