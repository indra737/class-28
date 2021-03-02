class Slingshot{
 constructor(bodyA,pointB){
     var options={
         bodyA: bodyA ,
         pointB:pointB , 
         length: 1,
         stiffness: 1
     };
     this.slingshot=Constraint.create(options);
     this.pointB=pointB
     World.add(world,this.slingshot);
 }
  fly() {
      this.slingshot.bodyA=null;
  }
show(){
    if(this.slingshot.bodyA){
var pointA=this.slingshot.bodyA.position;
var pointB=this.pointB;
    
strokeWeight(4)
line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}



}