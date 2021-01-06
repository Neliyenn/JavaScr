const winterdiv = document.getElementById('snowing');
const canvas = document.querySelector('canvas');

canvas.width = innerWidth;
canvas.height = innerHeight;

winterdiv.appendChild(canvas);

const ctx = canvas.getContext('2d');
const bgImage = new Image();
bgImage.src = 'snow.png';

const snowflakes =[];
class snowfall{
    static snowfall(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snowfall.addSnowflakes();
        snowfall.addSnow();        
    }

    static addSnowflakes(){
        const x = Math.ceil(Math.random()* canvas.width);
        const speed = Math.ceil(Math.random()* 5);
        const radius = Math.PI * 10;

        snowflakes.push({
            x:x,
            y:0,
            speed: speed,
            radius: radius
        });
    }

    static addSnow(){
        for(let i=0; i<snowflakes.length; i++){
            let flake = snowflakes[i];

            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.arc(flake.x, flake.y += flake.speed/2, flake.speed* 0.8, 0, flake.radius);
            ctx.fill();
        }
    }
}
setInterval(()=> snowfall.snowfall(), 20);

// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

// canvas.width = innerWidth;
// canvas.height = innerHeight;

// class SnowBall{
//     constructor(){
//         this.x = Math.random()*4000;
//         this.y = 1;
//         this.color = 'white';
//         this.radius = Math.random()*10;

//     }

//     draw(){
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//     }

//     update(deltaTime){
//         this.y += 5 / deltaTime;
//         this.x += 2 / deltaTime;

//     }
// }

// // function snowing(){
// //     let i;
// //     for (i = 0; i < 100; i++) {
// //         let snowball = new SnowBall();
// //         snowball.draw();
// //     }
// // }
// // snowing();
// let snowball1 = new SnowBall();
// let snowball2 = new SnowBall();
// let snowball3 = new SnowBall();
// let snowball4 = new SnowBall();
// let snowball5 = new SnowBall();

// let lastTime = 0;
// function snow(timestamp){
//     let deltaTime = timestamp - lastTime;
//     lastTime = timestamp;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
	
//     snowball1.update(deltaTime);
//     snowball2.update(deltaTime);
//     snowball3.update(deltaTime);
//     snowball4.update(deltaTime);
//     snowball5.update(deltaTime);

//     snowball1.draw();
//     snowball2.draw();
//     snowball3.draw();
//     snowball4.draw();
//     snowball5.draw();

//     requestAnimationFrame(snow);
// }

// requestAnimationFrame(snow);



