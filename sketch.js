const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = 0;
var wrong1;

function preload(){

}
function setup() {
  createCanvas(900,900);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


}
function draw() {
  background(0); 
  console.log(gameState)
  if(gameState === 0){

    textSize(25);
    stroke("yellow");
    fill("yellow");
    text("Hello Everyone",370,450);
  
  }else if(gameState === 0.1){

    background(255,0,0);
    textSize(30)
    fill("black")
    text("WRONG!!",400,300)

    if(keyCode === 32){
      gameState = 1;
    }

  }else if(gameState === 0.5){
  
    textSize(20)
    stroke("red");
    fill("green")
    text("Today As My Present To The Family, We're Gonna Play Some Chrismas Triva!!",100,450)
  
  } else if(gameState === 1){
    rectangleQuestion();

    textSize(15)
    stroke("gray");
    fill("gray")
    text("* Use Numbers To Answer *",100, 120)


    textSize(35)
    stroke("red");
    fill("green")
    text("What’s the most successful Christmas movie ever?",75,100);
//question 1

//response A (wrong)
    textSize(25)
    fill("black")
    text("Elf",140,450);
//response B (wrong)
    textSize(20)
    fill("black")
    text("How The Grinch Stole Chrismas",510,450);
//response C (correct)
    textSize(25)
    fill("black")
    text("Home Alone",140,670);
//response D (wrong)
    textSize(25)
    fill("black")
    text("Frosty The Snowman",520,670);

    if(keyCode === 49 || keyCode === 50 || keyCode === 52){
      background(255,0,0)
      gameState = 0.1;
    }
    if(keyCode === 51){
      gameState = 1.5
    }
  } else if(gameState === 1.5){

    background(0,255,0)

    textSize(30)
    fill("black")
    text("Correct!!",400,300)

    if(keyCode === 32){
      gameState = 2
    }

  } else if(gameState === 2){
    rectangleQuestion();

    textSize(15)
    stroke("gray");
    fill("gray")
    text("* Use Numbers To Answer *",100, 120)


    textSize(30)
    stroke("red");
    fill("green")
    text("What Percentage Of Americans Use Artificial Christmas trees?",50,100);
//question 2

//response A (correct)
    textSize(25)
    fill("black")
    text("85%",140,450);
//response B (wrong)
    textSize(20)
    fill("black")
    text("65%",510,450);
//response C (wrong)
    textSize(25)
    fill("black")
    text("90%",140,670);
//response D (wrong)
    textSize(25)
    fill("black")
    text("50%",520,670);

    if(keyCode === 51 || keyCode === 50 || keyCode === 52){
      background(255,0,0)
      gameState = 0.1;
    }
    if(keyCode === 49){
      gameState = 2.5
    }

  } else if(gameState === 2.5){

    background(0,255,0)

    textSize(30)
    fill("black")
    text("Correct!!",400,300)

    if(keyCode === 32){
      gameState = 3
    }

  }else if(gameState = 3){
    rectangleQuestion();

    textSize(15)
    stroke("gray");
    fill("gray")
    text("* Use Numbers To Answer *",100, 120)


    textSize(20)
    stroke("red");
    fill("green")
    text("What well-known Christmas carol became the first song ever broadcast from space in 1965?",0,100);
//question 3

//response A (wrong)
    textSize(25)
    fill("black")
    text("Joy To The World",140,450);
//response B (wrong)
    textSize(20)
    fill("black")
    text("12 Days Of Chrismas",510,450);
//response C (wrong)
    textSize(25)
    fill("black")
    text("Jingle Bells",140,670);
//response D (wrong)
    textSize(25)
    fill("black")
    text("Silent Night",520,670);

    if(keyCode === 49 || keyCode === 50 || keyCode === 52){
      background(255,0,0)
      gameState = 0.1;
    } 
    if(keyCode === 51){
      gameState = 3.5;
    }

  }

  if(gameState === 3.5){

    background(0,255,0)

    textSize(30)
    fill("black")
    text("Correct!!",400,300);
    text("Thats All The Questions!!!",200,200);

    if(keyCode === 32){
      gameState = 4
    }

  }


  if(gameState === 4){

  
    rectangleQuestion();

    textSize(15)
    stroke("gray");
    fill("gray")
    text("* Use Numbers To Answer *",100, 120)


    textSize(20)
    stroke("red");
    fill("green")
    text("What Do You Think The Family Present Is?",75,100);
//question 4

//response A (wrong)
    textSize(25)
    fill("black")
    text("A Car",140,450);
//response B (wrong)
    textSize(20)
    fill("black")
    text("Just Dance 2020",510,450);
//response C (wrong)
    textSize(25)
    fill("black")
    text("A Vacation",140,670);
//response D (correct)
    textSize(25)
    fill("black")
    text("An Electronic",520,670);

    if(keyCode === 49 || keyCode === 50 || keyCode === 51 || keyCode === 52){
      gameState = 5
    }

  }
  
  if(gameState === 5){
    background(0,0,255)

    textSize(30)
    fill("black")
    text("Let's Find Out",400,300)
  }
  if(keyCode === 32 && gameState === 3.5){
    gameState = 4;
  }  
  
  if(gameState === 0 && keyDown("space")){
    gameState = 0.5;
  
  } else if(gameState === 0.5 && keyDown("space")){
    gameState = 1;
  
  }
  
    textSize(10)
    fill("gray")
    stroke("black")
    text("Press 'space' To Continue!!",770,870)
  
    drawSprites();
}


function rectangleQuestion(){
  fill("gray")
  stroke("white")
  rect(100,400,300,100)
  text("Num. 1",100,420)

  fill("gray")
  stroke("white")
  rect(500,400,300,100)
  text("Num. 2",500,420)

  fill("gray")
  stroke("white")
  rect(100,600,300,100)
  text("Num. 3",100,620)

  fill("gray")
  stroke("white")
  rect(500,600,300,100)
  text("Num. 4",500,620)

}