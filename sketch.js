const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, a;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionsHeight = 300;


function setup() {
    a = 0;
    b = -1;
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    //box1 = new Box(200,300,50,50);
    //division1 = new Divisions(200,100,100,20)
    ground = new Ground(240,height,800,20);
    for (var j = 40; j <= width; j = j+50) {
        plinkos.push(new Plinko(j,75,10));
        b = b+1;
        //console.log(plinkos[a]);
    }
    for (k = 0; k <= width; k = k + 80 ) {
      divisions.push(new Divisions(k, height - divisionsHeight/2, 10, divisionsHeight ));
      //console.log(divisions[k]);
    }
    
    for (var j = 15; j<= width; j = j+50) {
       plinkos.push(new Plinko(j,175,10));
        b = b+1;
    }
    for (var j = 40; j<= width; j = j+50) {
      plinkos.push(new Plinko(j,275,10));
       b = b+1;
   }
   for (var j = 15; j<= width; j = j+50) {
    b = b+1;
    plinkos.push(new Plinko(j,375,10));
 }
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }

function draw(){
    background(0);
    Engine.update(engine);
   //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
   // console.log(a);
   // box1.display();
    //divisions.display();
    //box2.display();
    ground.display();
    if(frameCount%90 === 0  ) {
      particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
      a = a + 1;
    }
    for (var l = 0; l< a + 1; l++){
      particles[l].display();
    }
    for (var k = 0; k< divisions.length; k++){
        divisions[k].display();
    }
    for (var j = 0; j< b + 1; j++){
        
        plinkos[j].display();
    }
    //if (a === 0) {
      
    //}
    
}