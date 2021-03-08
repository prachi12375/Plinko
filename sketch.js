var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
//var score =0;
//var particle;
//var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    //if(particle === 5){
    //  gameState = "end";
    //}

    

    
}
 


function draw() {
  background("black");
  //text("Score : "+score,20,30);
  textSize(20)
  text("500", 25, 750);
  text("500", 105, 750);
  text("250", 185, 750);
  text("250", 265, 750);
  text("50", 350, 750);
  text("50", 430, 750);
  text("250", 505, 750);
  text("250", 585, 750);
  text("500", 665, 750);
  text("500", 745, 750);
  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {

     plinkos[i].update();
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
     particles[j].update();
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].update();
     divisions[k].display();
   }
   //if(particles!=null){
   //  particles.display();
   //  if(particles.body.position.y>760 && particles.body.position.x<300){
   //   score=score+500;
   //   particles=null;
   //  }
   //}
}