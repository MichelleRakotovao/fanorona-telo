const Canvas=document.getElementById("canvas")
const ctx=Canvas.getContext("2d")

ctx.fillStyle="white"
ctx.lineWidth=2
ctx.strokeStyle='#787FF6'

const canvasWidth=500
const canvasHeigth=500

drawBoard()
 
const Player1=new Player()
const Player2=new Player()

Canvas.addEventListener("click",(e)=>{
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++){
        x=e.offsetX
        y=e.offsetY
        if(isClose(x,y,tab[i][j].x,tab[i][j].y)){
            console.log(tab[i][j])
        }  
    }
  }
})