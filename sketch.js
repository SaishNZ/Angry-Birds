const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backImage;
var rope1;
var platform;
var Score=0;
var score=0;
var gs="onSling";

function preload() {
    timeChanging();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    platform = new Ground(150, 310, 300, 170);

    bird = new Bird(200,100);

    rope1 = new Rope(bird.body, {x: 200, y: 50 });

}

function draw(){
    if(backImage) {background(backImage)};
    Engine.update(engine);

    push();
    textSize(20);
    strokeWeight(2);
    stroke("#A52A2A");
    text("Score: "+score, 1000, 50);
    pop();

    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    platform.display();

    bird.display();
    rope1.display();

    pig1.Score();
    pig3.Score();
}

function mouseDragged() {
    if(gs==="onSling") {
    Matter.Body.setPosition(bird.body, {x: mouseX, y:mouseY})
    }
}

function mouseReleased() {
    rope1.fly()
    gs = "launched";
}

function keyPressed() { 
    if(keyCode = 32){
        window.location.reload()
    }
}

async function timeChanging() {
    var time = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var convert = await time.json();
    var DT = convert.datetime;
    var onlyTime = DT.slice(11, 13);

    if(onlyTime > 06 && onlyTime < 18) {
        var bgTime = "sprites/bg.png";
    } else {
        var bgTime = "sprites/bg2.jpeg";
    }

    backImage = loadImage(bgTime);

    console.log(onlyTime);
}

