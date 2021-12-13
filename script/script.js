let nombrePlanetas = Array ('Tierra', 'Marte')
let distancia= [5,3,'67']
const tamaño = []

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamaño)

let i=0;

/*   CICLO WHILE

while (i<=nombrePlanetas.length -1) {
    console.log(i)
    console.log(nombrePlanetas[i]);
    i = i+1
    
}*/

 /*  CICLO FOR
 
 
 for (let index = 0; index < nombrePlanetas.length; index++){
 console.log(nombrePlanetas[index]);
}*/

/*   CICLO FOR IN

for (const key in Object){
    if(Object.hasOwnProperty.call(object, key)){
        const element = object[key];
    }

}

for (const key in nombrePlanetas){
    console.log(nombrePlanetas[key])
}*/


/*  CICLO FOR OF  



for (const planeta of nombrePlanetas){
     console.log(planeta)
}
*/


for (const key in distancia){
    if(distancia[key] =='5'){
        console.log('se encontro la distancia')
    }
    else{
        console.log('no se encontro la distancia')
    }
}



