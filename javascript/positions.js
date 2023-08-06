 //tableau contenant les intersections de chaque ligne
let tab=[
    //1
   [{x:0,y:0,isUsed:false},
    {x:300,y:0,isUsed:false},
    {x:600,y:0,isUsed:false}],

   //2
   [ {x:0,y:300,isUsed:false},
    {x:300,y:300,isUsed:false},
    {x:600,y:300,isUsed:false}],

   //3
    [{x:0,y:600,isUsed:false},
    {x:300,y:600,isUsed:false},
    {x:600,y:600,isUsed:false}]
]
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`${i},${j},${tab[i][j].x} , ${tab[i][j].y}`);        
    }
    
}