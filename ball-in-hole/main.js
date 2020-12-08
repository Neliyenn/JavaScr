/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 700;

class Ball {
    constructor(x, y, radius, color, velocity){
        this.x = 100;
        this.y = 600;
        this.radius = 20;
        this.color = 'red';
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    
    update(deltaTime){
        if(deltaTime) return;

        this.x += 5 / deltaTime;

    }
}

class Hole {
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    // GetX()
    // {
    //     return this.x;
    // }

    // GetY()
    // {
    //     return this.y;
    // }

    draw(){
        ctx.beginPath();
        ctx.arc(this. x, this.y, this.radius, 0, Math.PI*2, false);
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

const ball = new Ball();

let hole2 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');
let hole3 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');
let hole4 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');
let hole5 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');
let hole1 = new Hole(Math.random() * 600, Math.random() * 500, 30, 'grey');

const finish = new Finish(700, 100, 30, 'orange');

// window.addEventListener('deviceorientation', onDeviceMove);

// function onDeviceMove(ev){
//     console.log(ev.alfa, ev.beta, ev.gamma);
// }


// function setHoles() {
//     let i;
//     for(i = 0; i < 30; i++){
//         // let cordX = 0;
//         // let cordY = 0;
//         // let checkX = true;
//         // let checkY = true;

//         // do
//         // {
//         //     cordX = Math.random()*1400;
//         //     cordY = Math.random()*900;
            
//         //     checkX = Math.abs(cordX - 100) < 50; 
//         //     checkY = Math.abs(cordY - Math.random()*800) < 50; 
//         // }
//         // while(checkX || checkY);

//            let hole = new Hole(Math.random() * 1400, Math.random() * 900, 30, 'grey');
//         // hole.draw();
//     }

// }

// setHoles();

let lastTime = 0;

function game(timestamp){
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.update(deltaTime);
    ball.draw();
    hole1.draw();
    hole2.draw();
    hole3.draw();
    hole4.draw();
    hole5.draw();
    finish.draw();

    requestAnimationFrame(game);
}

requestAnimationFrame(game);


