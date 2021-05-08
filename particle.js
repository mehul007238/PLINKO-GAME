class particle{
constructor(x,y,r){

var options={
isStatic:false
}
this.r=r;
this.body = Bodies.circle(x,y,this.r/2 ,options)
this.color=color(random(0, 255), random(0,255),  random(0, 255))
World.add(world, this.body)
}

display(){
fill(this.color)    
circle(this.body.position.x,this.body.position.y, this.r);

}
}

