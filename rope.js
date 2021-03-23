class Rope{
    constructor(body1, point2) {
        var options = {
            bodyA : body1,
            pointB : point2,
            length : 10,
            stiffness : 0.1
        }

        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);
        this.p = point2;

        this.s1 = loadImage("sprites/sling1.png");
        this.s2 = loadImage("sprites/sling2.png");
        this.s3 = loadImage("sprites/sling3.png");

    }

    display() {
       
        if(this.body.bodyA) {

            push()
            strokeWeight(4);
            stroke("#301608");
            line(this.body.bodyA.position.x-25, this.body.bodyA.position.y, this.p.x-20, this.p.y+10); 
            line(this.body.bodyA.position.x-25, this.body.bodyA.position.y, this.p.x+20, this.p.y+10); 
            pop();

            image(this.s3, this.body.bodyA.position.x-25, this.body.bodyA.position.y-10, 10, 20);

        }

        
        image(this.s1, 200, 30);
        image(this.s2, 170, 30); 

    }

    fly() {
       this.body.bodyA = null;  
    }

}