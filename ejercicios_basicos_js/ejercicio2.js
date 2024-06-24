//EJERCICIO2.1. Luke Skywalker cumple años:
const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...
jedi.edad = 25;

console.log(jedi);//nombre: 'Luke Skywalker', edad: 25


//EJERCICIO2.2. Presentación al estilo Leia Organa:
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

console.log(`Soy ${nombre} ${apellido}, tengo ${edad} años y soy una princesa de Alderaan.`);//'Soy Leia Organa, tengo 20 años y soy una princesa de Alderaan.'


//EJERCICIO2.3. Calculando el coste total de sables de luz:
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...

const precioTotal = sable1.precio + sable2.precio;

console.log("El precio total de los sables de luz es:", precioTotal);//El precio total de los sables de luz es: 3500



//EJERCICIO2.4. Actualizando el precio final de las naves:
let precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("Nuevo precio final de la nave Ala-X:", nave1.precioFinal);
console.log("Nuevo precio final del Halcón Milenario:", nave2.precioFinal);

//respuesta de la consola
//Nuevo precio final de la nave Ala-X: 75000
//Nuevo precio final del Halcón Milenario: 95000

