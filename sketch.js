const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img, backgroundImg;
var score=0;
var bg = "images/levelOne.jpg";
var level = 1;
var init=true;
var shots =3;
var PLAY=1,END=0,gameState=PLAY;
var slingState= "onSling";
function preload(){
 // getBackgroundImage();
  polygon_img=loadImage("images/polygon.png");
  backgroundImg1=loadImage("images/levelOne.jpg");
  backgroundImg2=loadImage("images/levelTwo.jpg");
  backgroundImg3=loadImage("images/levelThree.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
 
 
  //level one
   level1 =new LevelOne();
 
  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  //background(56,44,44); 
  switch(level){
    case 1:background(backgroundImg1);
          break
    case 2:background(backgroundImg2);
          break;
    case 3:background(backgroundImg3);
          break;
  default:background(backgroundImg1);
          break;
  }
    if(gameState===PLAY) {
          if(level===1){
              level1.display();
              level1.score();
                if(score>400){
                  level=2;
                  level1.destroy();
                
                }
          } else if(level===2){
              if(init){
                level1 = new LevelTwo();
                init=false;
              }
            level1.display();
            level1.score();
              if(score>800){
                level=3;
                level1.destroy();
                init=true;
              }
          }else if(level===3){
            if(init){
              level1 = new LevelThree();
              init=false;
            }
          level1.display();
          level1.score();
          if(score>1200){
            gameState=END;
            level1.destroy();
            init=true;
          }
    }

    //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("gold");
  stroke("black");
  strokeWeight(5);
  text("SCORE : "+score,41,35);
  text("LEVEL : "+level,275,35);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  text("Drag the polygon to destroy the blocks",650,340);
  //ground.display();
  
  strokeWeight(2);
  stroke(15);
  
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  //text(mouseX+","+mouseY,mouseX,mouseY);

  } else if(gameState===END){
    if(shots<=0){
    fill("red");
    stroke("black");
    strokeWeight(5);
    textSize(32)
    text("You are out of chances to proceed further! ",width/2-300,height/4);
    text("Your SCORE : "+score,width/2-150,height/2);
    }else {
    fill("gold");
    stroke("black");
    strokeWeight(5);
    textSize(32)
    text("You Won! with a SCORE : "+score+" clearing "+level +" levels",width/2-300,height/4);
    }
    
  }
    
}
function mouseDragged(){
  if(gameState===PLAY && slingState==="onSling"){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
  slingShot.fly();
  shots = shots-1;
  slingState="released"
}
function keyPressed(){
  if(keyCode === 32 && shots>0){
      slingShot.attach(this.polygon);
      slingState="onSling"
  } else{
    gameState=END;
    
  }
}
