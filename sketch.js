var bg, bgImage;

function preload() {
    //load the images here
   bgImage=loadImage("images/space.jpg")
}

function setup(){
    createCanvas(1000, 800);
    bg = createSprite(width/2, height/2);
    bg.addImage("bg", bgImage);
    bg.scale=1

    planet = new Earth ()
    asteroid1 = new Asteroid ();
    plane = new Plane();
}

function draw() {

    background("black");
   
    drawSprites();
    planet.display();
    asteroid1.display();
    plane.display();
}


function keyPressed(){

  

}
