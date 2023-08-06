const Canvas=document.getElementById("canvas")
const ctx=Canvas.getContext("2d")

//traçage de la table
ctx.fillStyle="white"
ctx.lineWidth=2
ctx.strokeStyle='#787FF6'
const canvasWidth=600
const canvasHeigth=600
ctx.beginPath()
ctx.fillRect(0,0,canvasWidth,canvasHeigth)

ctx.moveTo(tab[0][0].x,tab[0][0].y)
ctx.lineTo(tab[2][2].x,tab[2][2].y)

ctx.moveTo(tab[0][2].x,tab[0][2].y)
ctx.lineTo(tab[2][0].x,tab[2][0].y)

ctx.moveTo(tab[0][1].x,tab[0][1].y)
ctx.lineTo(tab[2][1].x,tab[2][1].y)

ctx.moveTo(tab[1][0].x,tab[1][0].y)
ctx.lineTo(tab[1][2].x,tab[1][2].y)
ctx.stroke()


