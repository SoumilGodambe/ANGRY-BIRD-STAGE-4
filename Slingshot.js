class Slingshot {
constructor(bodyA,pointB){

    var options = {
        bodyA:bodyA,
        pointB:pointB,
        length:100,
        stiffness:1
    }
    this.pointB = pointB;
    this.sling = Constraint.create(options)
    World.add(world,this.sling);


}

fly(){
   this.sling.bodyA=null 
}

display(){
    if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position; 
    var pointB = this.pointB;
    //console.log(pointB.x)
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}


}