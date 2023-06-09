const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

let gameSpeed = 10;
let gameFrame = 0; 

const bgsky = new Image();
bgsky.src = 'sky.png';

const bgrocks_1 = new Image();
bgrocks_1.src = 'rocks_1.png';

const bgrocks_2 = new Image();
bgrocks_2.src = 'rocks_2.png';

const bgclouds_1 = new Image();
bgclouds_1.src = 'clouds_1.png';

const bgclouds_2 = new Image();
bgclouds_2.src = 'clouds_2.png';

const bgclouds_3 = new Image();
bgclouds_3.src = 'clouds_3.png';

const slider = document.getElementById('slider');
slider.value = gameSpeed;
const showGameSpeed = document.getElementById('showGameSpeed');
showGameSpeed.innerHTML = gameSpeed;
slider.addEventListener('change', function(e){
    gameSpeed = e.target.value;
    showGameSpeed.innerHTML = e.target.value;
});

// let x = 0;
// let x2 = 800;

class Layer{
    constructor (image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 800;
        this.height = 700;
        // this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        // if(this.x <= - this.width){
            // this.x = 0;
        // }
        // if(this.x2 <= - this.width){
            // this.x2 = this.width + this.x -this.speed;
        // }
        // this.x = this.x - this.speed;
        // this.x2 = Math.floor(this.x2 - this.speed);
        this.x = gameFrame * this.speed % this.width;
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x, this.y + this.width, this.width, this.height);
    }
}
const sky = new Layer(bgsky, .1);
const clouds_1 = new Layer(bgclouds_1, 0.2);
const clouds_2 = new Layer(bgclouds_2, 0.3);
const clouds_3 = new Layer(bgclouds_3, 0.4);
const rocks_1 = new Layer(bgrocks_1, 0.5);
const rocks_2 = new Layer(bgrocks_2, 0.6);

const gameObject = [sky, clouds_1, clouds_2, clouds_3, rocks_1, rocks_2];

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // sky.update();
    // sky.draw();
    // rocks_1.update();
    // rocks_1.draw();
    // rocks_2.update();
    // rocks_2.draw();
    // clouds_1.update();
    // clouds_1.draw();
    // clouds_2.update();
    // clouds_2.draw();
    // clouds_3.update();
    // clouds_3.draw();
    gameObject.forEach(object =>{
        object.update();
        object.draw();
    });

    // ctx.drawImage(backgroundLayer2, x, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.drawImage(backgroundLayer2, x2, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // if(x < -800){
    //     x = 800 - gameSpeed - 10;
    // }
    // else{
    //     x-= gameSpeed;
    // }
    // if(x2 < -800){
    //     x2 = 800 - gameSpeed - 10;
    // }
    // else{
    //     x2-= gameSpeed;
    // }
    gameFrame--;
    requestAnimationFrame(animate)

}
animate()