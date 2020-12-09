const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class SnowBall{
    constructor(){
        this.x = Math.random()*4000;
        this.y = 1;
        this.color = 'white';
        this.radius = Math.random()*10;

    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update(deltaTime){
        this.y += 5 / deltaTime;
        this.x += 2 / deltaTime;

    }
}

// function snowing(){
//     let i;
//     for (i = 0; i < 100; i++) {
//         let snowball = new SnowBall();
//         snowball.draw();
//     }
// }
// snowing();
let snowball1 = new SnowBall();
let snowball2 = new SnowBall();
let snowball3 = new SnowBall();
let snowball4 = new SnowBall();
let snowball5 = new SnowBall();

let lastTime = 0;
function snow(timestamp){
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
	
    snowball1.update(deltaTime);
    snowball2.update(deltaTime);
    snowball3.update(deltaTime);
    snowball4.update(deltaTime);
    snowball5.update(deltaTime);

    snowball1.draw();
    snowball2.draw();
    snowball3.draw();
    snowball4.draw();
    snowball5.draw();

    requestAnimationFrame(snow);
}

requestAnimationFrame(snow);



