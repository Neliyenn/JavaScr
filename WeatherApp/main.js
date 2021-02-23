let button = document.querySelector('.newWeatherForecast');
let inputValue = document.querySelector('.city');
let city = document.querySelector('.name');
let description = document.querySelector('.description');
let temp = document.querySelector('.temp');
let wind = document.querySelector('.wind');
let pressure = document.querySelector('.pressure');
let weatherImage = document.querySelector('.image');

button.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=metric&appid=59ecab719377b365219b006f47278313')
        .then(response => response.json())
        .then(data => {
            let cityValue = data['name'];
            let imageValue = data['weather'][0]['icon'];
            let tempValue = Math.round(data['main']['temp']);
            let descriptionValue = data['weather'][0]['description'];
            let windValue = data['wind']['speed'];
            let pressureValue = data['main']['pressure'];

            city.innerHTML = cityValue;
            weatherImage.innerHTML = `<img src="http://openweathermap.org/img/wn/${imageValue}@2x.png"/>`;
            temp.innerHTML = tempValue + ' °C';
            description.innerHTML = descriptionValue;
            wind.innerHTML = windValue + ' m/s';
            pressure.innerHTML = pressureValue + ' hPa';
        })

    
        .catch(err => alert('Invalid city name'));
});