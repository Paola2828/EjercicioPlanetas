let nombrePlanetas = Array ('Tierra', 'Marte', 'Jupiter')
let distancia= [6,3,'67']
const tamaño = [10,20,30]

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

nombrePlanetas.forEach((value, index, array) =>{
    console.log('planeta', index, value)
});



/*nombrePlanetas.map((planetas,index)=>{
    return(
        console.log(`El planeta ${planetas} tiene tamaño de :${tamaño[index]}`)
    )
})*/


let resultadoMap = nombrePlanetas.map((planetas, index) =>{
    return(`El planeta ${planetas} tiene tamaño de :${tamaño[index]}`)
})
//es un array lo que muestra mientra que arriba imprime cada uno de los indices"el planeta tierra tien 10" ...
console.log(resultadoMap)

/*for (const key in distancia){
    if(distancia[key] =='5'){
        console.log('se encontro la distancia')
    }
    else{
        console.log('no se encontro la distancia')
    }
}*/



