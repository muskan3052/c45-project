class Asteroid {
    constructor(){
        this.x= 200
        this.y=400
        this.width=100
        this.height=100
        this.image=loadImage("images/asteroid.png")
        //this.velocityY=3;
    }
    display(){
    image(this.image, this.x, this.y, this.width, this.height);
    }
}