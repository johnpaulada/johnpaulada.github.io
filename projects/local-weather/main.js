const {buildURL} = ParamHelpers
const API_KEY   = 'b2709083cba938ec2aba09a017e2285d'
const API_URL   = 'http://api.openweathermap.org/data/2.5/weather'
const UNIT_SYSTEM = {
  METRIC: 'metric',
  IMPERIAL: 'imperial'
}

function fetchCoordinates(callback) {

  // Start loading
  setLoading(true)
  console.log('Loading...')

  navigator.geolocation.getCurrentPosition(
    (position) => {
      callback(position.coords)

      // Loading complete
      setLoading(false)
      console.log('Coordinates loaded.')
    },
    (error) => console.log(error)
  );
}

function fetchWeather({latitude, longitude}) {
  const url = buildURL(API_URL, {
    'lat': latitude,
    'lon': longitude,
    'units': UNIT_SYSTEM.METRIC,
    'APPID': API_KEY
  })

  // Start loading
  setLoading(true)
  console.log('Loading...')

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayWeather(data)
      setLoading(false)
      console.log('Weather loaded.')
    })
}

function displayWeather(data) {
  const location = `${data.name}, ${data.sys.country}`
  const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
  const description = data.weather[0].description.replace(/\b([a-z])/g, (c) => c.toUpperCase())
  const locationElement = document.querySelector('.header__subtitle')
  const descriptionElement = document.querySelector('.description')
  const iconElement = document.querySelector('.icon')

  locationElement.innerHTML = location
  descriptionElement.innerHTML = description
  iconElement.src = icon

  console.log(data);
}

function setLoading(shouldLoad) {
  const bodyClass = document.querySelector('body').classList

  if (shouldLoad) {
    bodyClass.add('translucent')
  } else {
    bodyClass.remove('translucent')
  }
}

fetchCoordinates(fetchWeather)
