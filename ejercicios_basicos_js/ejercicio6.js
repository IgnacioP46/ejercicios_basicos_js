//1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
for (let i = 0; i < 10; i++) {
    console.log(i);
}/*
0
1
2
3
4
5
6
7
8
9
*/



/*
1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo 
cuando el resto del numero dividido entre 2 sea 0.
*/
for (let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}/**
0
2
4
6
8
*/



/*
1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a '¡Dormido!'.
*/
for (let i = 0; i <= 10; i++) {
    if (i < 10) {
        console.log('Intentando dormir 🐑')
    }else {
        console.log('¡Dormido!')
    }
}
/**
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
¡Dormido!
 */