class Chain {
    constructor(body1, body2) {
        var Coptions = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 50,
        } 
        this.chain = Constraint.create(Coptions);

        World.add(world, this.chain); 
    }

 display() {

    strokeWeight(4);
    line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y,);

 }
}