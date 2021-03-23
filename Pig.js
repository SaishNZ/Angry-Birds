class Pig extends BaseClass {
    constructor(x, y) {
  
      super(x, y, 50, 50);
      this.image = loadImage("sprites/enemy.png");
      this.fade = 255;

    }

    display() {

      //console.log(this.body.speed);

      if(this.body.speed<2.5){
        super.display();
      }
      else{
        push()
        World.remove(world, this.body);
        tint(255, this.fade);
        this.fade = this.fade-2;
        image(this.image, this.body.position.x, this.body.position.y, 50, 50); 
        pop()

      }
      
      }

      Score(){
        if(this.fade<0 && this.fade>-1000) {
          score = score+1;
        }
      }

  }

  