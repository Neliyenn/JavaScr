/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 700;

class Ball {
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = 0;
        this.dy = 0;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    
    update(){
        this.x += this.dx;
        this.y += this.dy;
        this.draw(ctx);
    }
}

class Hole {
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

class Finish {
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this. x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

}

const ball = new Ball(100, 600, 20, 'red');
ball.draw();

let hole2 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');
let hole3 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');
let hole4 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');
let hole5 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');
let hole1 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');

const finish = new Finish(700, 100, 30, 'orange');
let distance = '';
let distance1 = '';
let distance2 = '';
let distance3 = '';
let distance4 = '';
let distance5 = '';

window.addEventListener('deviceorientation', onDeviceMove);

function onDeviceMove(ev){
    ball.dx = ev.alpha/60;
    ball.dy = ev.beta/60;
}

function game(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.update();
    hole1.draw();
    hole2.draw();
    hole3.draw();
    hole4.draw();
    hole5.draw();
    finish.draw();

    distance = Math.hypot(ball.x - hole1.x, ball.y - hole1.y);
    distance1 = Math.hypot(ball.x - hole2.x, ball.y - hole2.y);
    distance2 = Math.hypot(ball.x - hole3.x, ball.y - hole3.y);
    distance3 = Math.hypot(ball.x - hole4.x, ball.y - hole4.y);
    distance4 = Math.hypot(ball.x - hole5.x, ball.y - hole5.y);
    distance5 = Math.hypot(ball.x - finish.x, ball.y - finish.y);

    if(distance - ball.radius - hole1.radius < 1){
        alert('You Loose!');
    }
    else if(distance1 - ball.radius - hole2.radius < 1){
        alert('You Loose!');
    }
    else if (distance2 - ball.radius - hole3.radius < 1){
        alert('You Loose!');
    }
    else if (distance3 - ball.radius - hole4.radius < 1){
        alert('You Loose!');
    }
    else if (distance4 - ball.radius - hole5.radius < 1){
        alert('You Loose!');
    }
    else if (distance5 - ball.radius - finish.radius < 1){
        alert('You Win!');
    }
    
    requestAnimationFrame(game);
}
game();


