class Pion{
    x
    y
    isPlayer1
    //nombre de pions de chaque joueur
    static pionsP1=0
    static pionsP2=0
    static totalPions=0

    constructor(X,Y){
        this.x=X
        this.y=Y
    }
drawPion(){
    if (this.isPlayer1==true){
        ctx.beginPath()
        ctx.fillStyle="#14446B"
    }else{ 
        ctx.beginPath()
        ctx.fillStyle="gold"
    }
    ctx.arc(this.x,this.y,12,0,5*Math.PI)
    ctx.fill() 

}
}