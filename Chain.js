class Chain{
     constructor(bodyA, bodyB){
         var options ={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.4,
            length: 10
         }
         var chains = Constarint.create(options);
          World.add(world, chains);
     }

   display(){
       var pointA = this.chains.bodyA.position;
       var pointB = this.chains.bodyB.position;
       strokeWeight(4);
       line(pointA.x, pointA.y, pointB.x, pointB,y);
   }
}