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