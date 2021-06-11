const submit = document.querySelector('[find-city]')
submit.onclick = searchCity

async function searchCity() {

  const input = document.getElementById('city-name')
  let cityName = input.value

  const api = {
    key: '0a0d9a21329d9200ef9e9af7e0d55aa8',
    units: 'metric'
  }

  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${api.units}&appid=${api.key}`

  try {
    const response = await fetch(apiUrl)
    const data = await response.json() // transforma a resposta em JSON

    showWeather(data)

  } catch (err) {
    console.error(`Deu ruim! ${err}`)
  }
}

function showWeather(data) {

  let hiddenBody = document.querySelector('.card-body')
  hiddenBody.style.display = ''

  let location = document.querySelector('.w-location')
  location.innerHTML = `${data.name}, ${data.sys.country}`

  let temp = document.querySelector('.w-temp-value')
  temp.innerHTML = Math.round(data.main.temp)

  let weather = document.querySelector('.w-weather')
  weather.innerHTML = data.weather[0].main

  let icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
  let weatherIcon = document.querySelector('.w-icon')
  weatherIcon.src = icon

}
