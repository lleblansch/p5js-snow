let snow = [];
let winH = 900
let winW = 800
var slider;
var button;

function setup() {
    
    createCanvas(winW, winH);
    slider = createSlider(10, 500, 500)
    slider.position(20, 20)
    snowsetup()
}

function draw() {
    background(0);
    for (let i = 0; i < slider.value(); i++) {
        snow[i].move();
        snow[i].show(i);
        snow[i].recycle(i);
    }
}

function snowsetup() {
    snow = []
    for (let i = 0; i < slider.value(); i++) {
        snow[i] = new Snow(random(3, 10), random(100, 255), random(0, winW), 0)
    }
}

class Snow {
    constructor(size, opacity, x, y) {
        this.x = x
        this.y = y
        this.size = size
        this.opacity = opacity
        this.vx = random(-2, 2);
        this.vy = random(2, 5);
    }
    move() {
        this.x = this.x + this.vx
        this.y = this.y + this.vy
    }
    show(i) {
        /* this.color;
        if (i <= 255){
            this.color = [255, i*0.75, 0]
        } else if (i >= 256 && i <= 512){
            this.color = [i, 180, 0]
        } */

        noStroke();
        fill(/* this.color[0], this.color[1], this.color[2] */255, 255, 255, this.opacity);
        ellipse(this.x, this.y, this.size, this.size);
    }
    recycle(i) {
        if (this.x >= winW || this.x <= 0 || this.y >= winH || this.y <= 0) {
            console.log(`${i}.particle ded`)
            this.x = random(0, winW);
            this.y = 0;
            this.vx = random(-2, 2);
            this.vy = random(2, 5);
        }
    }
}



/* function setup() {

    var winW = 800;
    var winH = 800;
    createCanvas(winW, winH);
    background(25);
    snowball = new snow();
}

function draw() {
    snowball.move();
    snowball.show();
}

class snow {
    constructor() {
        this.x = Math.floor(Math.random() * winW);
        this.y = 0;
        this.vx = Math.floor(Math.random() * 10 - 5);
        this.vy = Math.floor(Math.random() * 5 + 3);
    }

    move() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }

    show() {
        stroke(255);
        strokeweight(4);
        nofill();
        ellipse(this.x, this.y, 2, 2);
    }
} */