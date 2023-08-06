class Pion{
    x
    y
    color
    isPlayer1
    constructor(X,Y){
        this.x=X
        this.y=Y
        if (this.isPlayer1)this.color="yellow"
        else this.color="#1CA7EC"
    }
   drawPion(){
    ctx.beginPath()
    ctx.arc(tab[i][j].x,tab[i][j].y,10,0,5*Math.PI)
    ctx.fill()
       
}
}