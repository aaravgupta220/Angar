class Chain{
    constructor(chA, chB){
        var options = {
            bodyA: chA,
            bodyB: chB,
            stiffness: 0.04,
            length: 50
        }
        var chain = Constraint.create(options);
        World.add(world, chain);
    }

    display(){
        var pointA = this.chain.chA.position;
        var pointB = this.chain.chB.position;
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    };
};