//fonction qui calcule la distance entre deux points
function distance(xA,yA,xB,yB){
  return Math.sqrt(Math.pow(xA-xB,2)+Math.pow(yA-yB,2))
}

//fonction vérifiant si la distance entre deux pts est inférieur à 150
function isClose(xA,yA,xB,yB){
  return (distance(xA,yA,xB,yB)<150)?true:false
}

//vérifie si le nombre total de pions n'est pas supérieur à 6
function verifyTotalPions(){
  return (Pion.totalPions<6)?true:false
}


