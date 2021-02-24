/* eslint-disable no-unused-vars */
const main = document.querySelector('main');

let weatherArray = [];
let input = document.querySelector('.city');
let btnAdd = document.querySelector('.newWeather');
let btnClear = document.querySelector('.clearWeather');

lastFromStorage();

btnAdd.addEventListener('click', function(){
    let elements = {};
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=59ecab719377b365219b006f47278313')
        .then(response => response.json())
        .then(data => {
            elements.city = data['name'];
            elements.desc = data['weather'][0]['description'];
            elements.temp = Math.round(data['main']['temp']);
            elements.img = data['weather'][0]['icon'];
            elements.wind = data['wind']['speed'];
            elements.pressure = data['main']['pressure'];
            weatherArray.push(elements);
            localStorage.setItem('savedForecast', JSON.stringify(weatherArray));
            // console.log(localStorage); localstorage dziala poprawnie
        })
        .then(() => displayWeather(elements))
        .catch(err => alert('Invalid city name'));
});

btnClear.addEventListener('click', function(){
    localStorage.removeItem('savedForecast');
    // console.log(localStorage); poprawnie usuwa caly localstorage
    main.innerHTML = '';
});

function displayWeather(elements){
    const displayWeather = document.createElement('div');
    const cityName = document.createElement('h1');
    const weatherImage = document.createElement('p');
    const descValue = document.createElement('p');
    const tempValue = document.createElement('p');
    const windValue = document.createElement('p');
    const presValue = document.createElement('p');

    displayWeather.classList.add('displayWeather');
    cityName.classList.add('cityName');
    weatherImage.classList.add('img');
    descValue.classList.add('desc');
    windValue.classList.add('wind');
    presValue.classList.add('pressure');
    cityName.innerHTML = elements.city;
    weatherImage.innerHTML = `<img src="http://openweathermap.org/img/wn/${elements.img}@2x.png"/>`;
    descValue.innerHTML = elements.desc + '<br><br>'; 
    tempValue.innerHTML = 'Temp: ' + elements.temp + ' °C';
    windValue.innerHTML = 'Wind: ' + elements.wind + ' m/s';
    presValue.innerHTML = 'Pressure: ' + elements.pressure + ' hPa';
    main.appendChild(displayWeather);
    displayWeather.appendChild(cityName);
    displayWeather.appendChild(weatherImage);
    displayWeather.appendChild(descValue);
    displayWeather.appendChild(tempValue);
    displayWeather.appendChild(windValue);
    displayWeather.appendChild(presValue);
}

function lastFromStorage(){
    weatherArray = [];
    let fromStorage = JSON.parse(localStorage.getItem('savedForecast'));
    if(fromStorage != null && fromStorage != '')
    {
        const storedWeather = fromStorage;
        if(storedWeather.length != 0){
            for(let x = 0; x < storedWeather.length; x++)
            {
                weatherArray.push(storedWeather[x]); 
                // console.log(weatherArray); widac zapisywaie z kazdym wyszukaniem, poprawnie dopisuje tablice
            }
        }
    }

    for(let y = 0; y < weatherArray.length; y++){
        displayWeather(weatherArray[y]);
    }
}