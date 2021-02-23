const main = document.querySelector('main');

let input = document.querySelector('.city');
let button = document.querySelector('.newWeatherForecast');
button.addEventListener('click', function(){
    let weather = {};
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=59ecab719377b365219b006f47278313')
        .then(response => response.json())
        .then(data => {
            weather.city = data['name'];
            weather.desc = data['weather'][0]['description'];
            weather.temp = Math.round(data['main']['temp']);
            weather.image = data['weather'][0]['icon'];
            weather.wind = data['wind']['speed'];
            weather.pressure = data['main']['pressure'];
        })
        .then(() => displayWeather(weather))
        .catch(err => alert('Invalid city name'));
});

function displayWeather(weather){
    const displayWeather = document.createElement('div');
    const cityName = document.createElement('h1');
    const weatherImage = document.createElement('p');
    const descValue = document.createElement('p');
    const tempValue = document.createElement('p');
    const windValue = document.createElement('p');
    const presValue = document.createElement('p');

    displayWeather.classList.add('container');
    cityName.classList.add('city');
    weatherImage.classList.add('img');
    descValue.classList.add('desc');
    windValue.classList.add('wind');
    presValue.classList.add('pressure');
    cityName.innerHTML = weather.city;
    weatherImage.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.image}@2x.png"/>`;
    descValue.innerHTML = weather.desc;
    tempValue.innerHTML = weather.temp + ' °C';
    windValue.innerHTML = 'Wind: ' + weather.wind + ' m/s';
    presValue.innerHTML = 'Pressure: ' + weather.pressure + ' hPa';
    main.appendChild(displayWeather);
    displayWeather.appendChild(cityName);
    displayWeather.appendChild(weatherImage);
    displayWeather.appendChild(descValue);
    displayWeather.appendChild(tempValue);
    displayWeather.appendChild(windValue);
    displayWeather.appendChild(presValue);

    displayWeather.addEventListener('click', function(){
        deleteWeather(displayWeather);
    });
}

function deleteWeather(tags){
    tags.remove();
}