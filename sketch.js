var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("flower.jpg");
  bg2 = loadImage("flower2.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 700, 50);
  text("Answer with Caps on each beginning Letter, no puncuation, and space between each word",100, 425);
  text("Bonus Hint: Fill In The Blanks! ", 100, 450);


  if(score === 3) {
    clear()
    background(bg2)
    fill("white")
    textSize(40);
    text("Happy Mother's Day!!!",250, 200);
  }

  drawSprites()
}