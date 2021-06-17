class Rope{

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }

        this.rope = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.rope);

    }
    fly(){
        this.rope.bodyA =null;
    }

    display(){

        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("red");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

        }
    
}