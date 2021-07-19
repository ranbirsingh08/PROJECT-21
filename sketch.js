var astronaut
var bg
var sleep
var brush
var gym
var drink
var move
var eat
function preload(){
bg=loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush= loadAnimation("images/brush.png");
gym= loadAnimation("images/gym21.png,images/gym22.png");
eat= loadAnimation("images/eat.png,images/eat2.png");
drink= loadAnimation("images/drink1.png,images/drink2.png");
move= loadAnimation("images/move.png");}
function setup() {
  createCanvas(400, 400);
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;}
  if(keyDown("dOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;}
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;}
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;}
  if(keyDown("M_KEY")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;}}
function draw() {
  background(220);
}