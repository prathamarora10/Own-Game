class Boy
{
    constructor(x,y,w,h){
        var options = {
            isStatic : false,
            density : 2,
            friction : 1
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.boy = createSprite(0,0,50,50)
        this.boy.addImage(boyImg)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        this.boy.x = pos.x
        this.boy.y = pos.y
    }
}