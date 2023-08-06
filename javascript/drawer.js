
//traçage de la table
function drawBoard(){
    ctx.beginPath()
    ctx.fillRect(100,100,canvasWidth,canvasHeigth)
        
    ctx.moveTo(tab[0][0].x,tab[0][0].y)
    ctx.lineTo(tab[2][2].x,tab[2][2].y)
        
    ctx.moveTo(tab[0][2].x,tab[0][2].y)
    ctx.lineTo(tab[2][0].x,tab[2][0].y)
        
    ctx.moveTo(tab[0][1].x,tab[0][1].y)
    ctx.lineTo(tab[2][1].x,tab[2][1].y)
        
    ctx.moveTo(tab[1][0].x,tab[1][0].y)
    ctx.lineTo(tab[1][2].x,tab[1][2].y)
    ctx.stroke()
}
   

