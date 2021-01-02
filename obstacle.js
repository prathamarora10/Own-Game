class Obstacle
{
    constructor(x,y,w,h){
        var options = {
            isStatic : false
        }

        this.body = Bodies.rectangle(x,y,w,h,options)
        this.obstacle = createSprite(0,0)
        this.w = w
        this.h = h
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        this.obstacle.x = pos.x 
        this.obstacle.y = pos.y

        var r = round(random(1,3))
        switch(r){
            case 1:this.obstacle.addImage(bench)
            break;
            case 2:this.obstacle.addImage(tree)
            break;
            case 3:this.obstacle.addImage(seesaw)
            break;
        }
    }
}