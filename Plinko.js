class Plinko {

    constructor(x, y, radius) {

        var options={
            isStatic:true,
            restitution:1
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);

    }

    display() {

        ellipseMode(CENTER);
        fill("white");
        ellpise(this.body.position.x, this.body.position.y, this.radius);

    }

}