class Bob{
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution: 1.5,
            friction: 0.6,
            density: 0.9,
        }
        this.body = Bodies.circle(x,y,25,options)
        World.add(world, this.body)

        console.log(this.body)
    }
    display(){
        push();
       // translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS)
        fill(254,0,255)
       // ellipse(0,0,25,25)
       ellipse(this.body.position.x,this.body.position.y,25,25)
        pop();
    }
}
