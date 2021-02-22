let button = document.querySelector('.submitBtn');
let inputValue = document.querySelector('.inputValue');
let name = document.querySelector('.name');
let decription = document.querySelector('.description');
let temp = document.querySelector('.temp');

fetch('http://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=59ecab719377b365219b006f47278313')