function distance(xA,yA,xB,yB){
  return Math.sqrt(Math.pow(xA-xB,2)+Math.pow(yA-yB,2))
}

function isClose(xA,yA,xB,yB){
  return (distance(xA,yA,xB,yB)<150)?true:false
}

function verifyTotalPions(){
  return (Pion.totalPions<6)?true:false
}

function verifyNbrePionsP1(){
  return (Pion.pionsP1<3)?true:false
}

