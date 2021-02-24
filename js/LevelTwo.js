class LevelTwo{

    constructor(){

        this.stand1 = new Stand(390,300,250,10);
      //  this.stand2 = new Stand(700,200,200,10);

        this.block1 = new Block(300,275,30,40);
        this.block2 = new Block(360,275,30,40);
        this.block3 = new Block(420,275,30,40);
        this.block4 = new Block(480,275,30,40);

        this.lBlock1=new LongBlock(390,225,250,20);

        this.block5 = new Block(300,205,30,40);
        this.block6 = new Block(360,205,30,40);
        this.block7 = new Block(420,205,30,40);
        this.block8 = new Block(480,205,30,40);

        this.lBlock2=new LongBlock(390,160,250,20);

        this.block9 = new Block(300,140,30,40);
        this.block10 = new Block(360,140,30,40);
        this.block11 = new Block(420,140,30,40);
        this.block12 = new Block(480,140,30,40);

        this.lBlock3=new LongBlock(390,100,250,20);

        this.block13 = new Block(300,80,30,40);
        this.block14 = new Block(360,80,30,40);
        this.block15 = new Block(420,80,30,40);
        this.block16 = new Block(480,80,30,40);

        this.lBlock4=new LongBlock(390,70,250,20);

      
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
    
    World.remove(world,this.block8.body)
    World.remove(world,this.block9.body)
    World.remove(world,this.block10.body)
    World.remove(world,this.block11.body)
    World.remove(world,this.block12.body)    
    World.remove(world,this.block13.body)
    World.remove(world,this.block14.body)
    World.remove(world,this.block15.body)
    World.remove(world,this.block16.body)

    World.remove(world,this.lBlock1.body)
    World.remove(world,this.lBlock2.body)
    World.remove(world,this.lBlock3.body)
    World.remove(world,this.lBlock4.body)
    }
    display(){

        this.stand1.display();
        //this.stand2.display();

        fill("skyblue");
    this.block1.display();
    this.block2.display();
    this.block3.display();
    this.block4.display();
    this.lBlock1.display();

    fill("pink");
    this.block5.display();
    this.block6.display();
    this.block7.display();
    this.block8.display();
    this.lBlock2.display();


    fill("teal");
    this.block9.display();
    this.block10.display();
    this.block11.display();
    this.block12.display();
    this.lBlock3.display();

    fill("gold");
    this.block13.display();
    this.block14.display();
    this.block15.display();
    this.block16.display();
    this.lBlock4.display();
    
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
   
    this.block8.score();
    this.block9.score();
    this.block10.score();
    this.block11.score();
    this.block12.score();
    this.block13.score();
    this.block14.score();
    this.block15.score();
    this.block16.score();

    this.lBlock1.score();
    this.lBlock2.score();
    this.lBlock3.score();
    this.lBlock4.score();
    }
}