const Canvas=document.getElementById("canvas")
const ctx=Canvas.getContext("2d")

ctx.fillStyle="white"
ctx.lineWidth=2
ctx.strokeStyle='#787FF6'

const canvasWidth=500
const canvasHeigth=500

//traçage de la table
drawBoard()
 
const Player1=new Player()
const Player2=new Player()

Canvas.addEventListener("click",(e)=>{
  Pion.totalPions=Pion.pionsP1+Pion.pions2//nombre total des pions
  
  for(let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
     
      let x=e.offsetX
      let y=e.offsetY

      if(isClose(x,y,tab[i][j].x,tab[i][j].y)){
        if (verifyTotalPions()){
          if(tab[i][j].state==true){
            alert(`Il y a déja un pion dans cette position!`)
          }else{
            alert(`${tab[i][j].x},${tab[i][j].y}`) 
            tab[i][j].state=true
            ++Pion.pionsP1
          }
        }else{
          alert(`Le nombre de de pions ne peut pas exceder 6!`)
        }
      
        
      }  
    }
  }
  alert(`nombre de pions:${Pion.totalPions}`)
})