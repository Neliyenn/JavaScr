/* eslint-disable no-undef */
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Ball {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    draw(){
        c.beginPath();
        c.arc(this. x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
    }
}

class Hole {
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    GetX()
    {
        return this.x;
    }

    GetY()
    {
        return this.y;
    }

    draw(){
        c.beginPath();
        c.arc(this. x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
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
        c.beginPath();
        c.arc(this. x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
    }
}

const ball = new Ball(100, Math.random()*800, 20, 'red');
ball.draw();

const finish = new Finish(1600, Math.random()*900, 30, 'orange');
finish.draw();

// window.addEventListener('deviceorientation', onDeviceMove);

// function onDeviceMove(ev){
//     console.log(ev.alfa, ev.beta, ev.gamma);
// }

function setHoles() {
    let i;
    for(i = 0; i < 30; i++){
        let cordX = 0;
        let cordY = 0;
        let checkX = true;
        let checkY = true;

        do
        {
            cordX = Math.random()*1400;
            cordY = Math.random()*900;
            
            checkX = Math.abs(cordX - 100) < 50; 
            checkY = Math.abs(cordY - Math.random()*800) < 50; 
        }
        while(checkX || checkY);

        let hole = new Hole(cordX, cordY, 30, 'grey');
        hole.draw();
    }

}

setHoles();