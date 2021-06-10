class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }

   fly(){
       this.paperObject.bodyA=null
   }
   
    display(){
       if (this.paperObject.bodyA){
        var pointA = this.paperObject.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}