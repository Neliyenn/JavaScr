/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 700;

class Ball {
    constructor(x, y, radius, color, speed){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;

        // this.dx = ev.alpha;
        // this.dy = ev.beta;
      
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    
    update(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.draw(ctx);
        this.x += this.dx;
        this.y += this.dy;

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

let ball = new Ball(100, 600, 20, 'red', 5,);
ball.draw();

let hole2 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');
let hole3 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');
let hole4 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');
let hole5 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');
let hole1 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');
hole1.draw();
hole2.draw();
hole3.draw();
hole4.draw();
hole5.draw();

const finish = new Finish(700, 100, 30, 'orange');
finish.draw();

window.addEventListener('deviceorientation', onDeviceMove);

function onDeviceMove(ev){
    dx = ev.alpha/60;
    dy = ev.beta/60;
}

function game(){
    ball.update();
    requestAnimationFrame(game);
}

onDeviceMove(ev);
requestAnimationFrame(game);


