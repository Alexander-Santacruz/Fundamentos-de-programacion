
let motos=["Yamaha","Kawasaki","Honda","Suzuki","Ducati"];

console.log(motos.length);
//
let numeros=[2,7,5,3,2];
let suma=numeros.reduce((acumulador,valoractual)=>acumulador + valoractual,0)
console.log(suma);
//
let numeromayor= Math.max(...numeros);
console.log(numeromayor)
//
let frutas=["Manzana","Pera","Guayaba","Lulo","Mango"];
let frutasinvertidas=frutas.slice().reverse();
console.log(frutasinvertidas);
//
let mujeres=["Laura","Sofia","Valentina","Daniela"];
let hombres=["Felipe","Danilo","Stywart","Brayan"];
let personas=[...mujeres,...hombres];
console.log(personas);

let mayusculas=mujeres[2].toUpperCase();
console.log(mayusculas);
