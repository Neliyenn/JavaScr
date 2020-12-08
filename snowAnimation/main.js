const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class SnowBall{
    constructor(){
        this.x = Math.random()*4000;
        this.y = 1;
        this. color = 'white';
        this.radius = Math.random()*10;

    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function snowing(){
    let i;
    for (i = 0; i < 100; i++) {
        let snowball = new SnowBall();
        snowball.draw();
    }
}
snowing();