var monkey , monkey_running;

var banana ,bananaImage, obstacle, obstacleImage;

var FoodGroup, obstacleGroup;

var ground;

score=0;

survivalTime=0;

 

function preload(){

 

 

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

 

  bananaImage = loadImage("banana.png");

  obstacleImage = loadImage("obstacle.png");

 

}

 

 

 

function setup() {

  createCanvas(600,600);

 

 FoodGroup=new Group();

  obstacleGroup=new Group();

 

  monkey=createSprite(65,432,20,20);

  monkey.addAnimation("running",monkey_running);

  monkey.scale=0.2;

 

  ground=createSprite(300,500,1000,20);

 

}

 

 

function draw() {

  background("white");

   monkey.collide(ground);

  

 text("score="+score,520,50);

 

   survivalTime=Math.ceil(frameCount/frameRate());

  text("survivalTime="+survivalTime,481,30);

 

  if(keyDown("space")&& monkey.y>=428)

    {

      monkey.velocityY=-20;

      

 

    }

  monkey.velocityY=monkey.velocityY+1;

 

 

 

 

 

  if(frameCount%100==0)

    {

      obstacle=createSprite(600,452,20,20);

       obstacle.addImage(obstacleImage);

  obstacle.scale=0.2;

       obstacle.velocityX=-10;

    

      obstacle.lifetime=60;

     

      obstacleGroup.add(obstacle);

   

    }

 

  if(frameCount%80==0)

    {

      banana=createSprite(600,Math.round(random(250,300)),20,20);

       banana.addImage(bananaImage);

  banana.scale=0.15;

       banana.velocityX=-10;

    

      banana.lifetime=60;

     

      FoodGroup.add(banana);

   

    }

 

  if(monkey.isTouching(FoodGroup))

    {

      score=score+1;

      FoodGroup.destroyEach();

    }

 

  if(monkey.isTouching(obstacleGroup))

    {

      obstacleGroup.destroyEach();

      FoodGroup.destroyEach();

      monkey.velocity=0;

      FoodGroup.setVelocityEach(0);

      obstacleGroup.setVelocityEach(0);

    }

 

 

 

 

drawSprites(); 

}