class LevelOne{
    constructor(){

       this.stand1 = new Stand(390,300,250,10);
        this.stand2 = new Stand(700,200,200,10);

        this.block1 = new Block(300,275,30,40);
        this.block2 = new Block(330,275,30,40);
        this.block3 = new Block(360,275,30,40);
        this.block4 = new Block(390,275,30,40);
        this.block5 = new Block(420,275,30,40);
        this.block6 = new Block(450,275,30,40);
        this.block7 = new Block(480,275,30,40);
        //level two
        this.block8 = new Block(330,235,30,40);
        this.block9 = new Block(360,235,30,40);
        this.block10 = new Block(390,235,30,40);
        this.block11 = new Block(420,235,30,40);
        this.block12 = new Block(450,235,30,40);
        //level three
        this.block13 = new Block(360,195,30,40);
        this.block14 = new Block(390,195,30,40);
        this.block15 = new Block(420,195,30,40);
        //top
        this.block16 = new Block(390,155,30,40);
      
        //set 2 for second stand
        //level one
        this.blocks1 = new Block(640,175,30,40);
        this.blocks2 = new Block(670,175,30,40);
        this.blocks3 = new Block(700,175,30,40);
        this.blocks4 = new Block(730,175,30,40);
        this.blocks5 = new Block(760,175,30,40);
        //level two
        this.blocks6 = new Block(670,135,30,40);
        this.blocks7 = new Block(700,135,30,40);
        this.blocks8 = new Block(730,135,30,40);
        //top
        this.blocks9 = new Block(700,95,30,40);    
    }
    destroy(){
    World.remove(world,this.block1.body)
    World.remove(world,this.block2.body)
    World.remove(world,this.block3.body)
    World.remove(world,this.block4.body)
    World.remove(world,this.block5.body)
    World.remove(world,this.block6.body)
    World.remove(world,this.block7.body)
    World.remove(world,this.block8.body)
    World.remove(world,this.block9.body)
    World.remove(world,this.block10.body)
    World.remove(world,this.block11.body)
    World.remove(world,this.block12.body)    
    World.remove(world,this.block13.body)
    World.remove(world,this.block14.body)
    World.remove(world,this.block15.body)
    World.remove(world,this.block16.body)
    World.remove(world,this.blocks1.body)
    World.remove(world,this.blocks2.body)
    World.remove(world,this.blocks3.body)
    World.remove(world,this.blocks4.body)
    World.remove(world,this.blocks5.body)
    World.remove(world,this.blocks6.body)
    World.remove(world,this.blocks7.body)
    World.remove(world,this.blocks8.body)
    World.remove(world,this.blocks9.body)
    }
    display(){
        this.stand1.display();
        this.stand2.display();

        fill("lightblue");
    this.block1.display();
    this.block2.display();
    this.block3.display();
    this.block4.display();
    this.block5.display();
    this.block6.display();
    this.block7.display();
        fill("turquoise");
    this.block8.display();
    this.block9.display();
    this.block10.display();
    this.block11.display();
    this.block12.display();
    fill("lightpink")
    this.block13.display();
    this.block14.display();
    this.block15.display();
        fill("gold");
    this.block16.display();
    fill("lightblue");
    this.blocks1.display();
    this.blocks2.display();
    this.blocks3.display();
    this.blocks4.display();
    this.blocks5.display();
    fill("lightpink")
    this.blocks6.display();
    this.blocks7.display();
    this.blocks8.display();
        fill("gold")
    this.blocks9.display();
            
    }
    score(){
    this.block1.score();
    this.block2.score();
    this.block3.score();
    this.block4.score();
    this.block5.score();
    this.block6.score();
    this.block7.score();
    this.block8.score();
    this.block9.score();
    this.block10.score();
    this.block11.score();
    this.block12.score();
    this.block13.score();
    this.block14.score();
    this.block15.score();
    this.block16.score();
      
    this.blocks1.score();
    this.blocks2.score();
    this.blocks3.score();
    this.blocks4.score();
    this.blocks5.score();
    this.blocks6.score();
    this.blocks7.score();
    this.blocks8.score();
    this.blocks9.score();    
    }
}