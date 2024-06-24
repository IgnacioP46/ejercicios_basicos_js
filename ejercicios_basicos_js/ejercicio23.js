const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];
  
  let peliculasPequenas = [];
let peliculasMedianas = [];
let peliculasGrandes = [];

for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    if (movie.durationInMinutes < 100) {
      peliculasPequenas.push(movie);
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
      peliculasMedianas.push(movie);
    } else if (movie.durationInMinutes >= 200) {
      peliculasGrandes.push(movie);
    }
  }

console.log("Películas pequeñas (menos de 100 minutos):");
console.log(peliculasPequenas);
/**
Películas pequeñas (menos de 100 minutos):
[ { name: 'Spirited Away', durationInMinutes: 80 } ]
 */

console.log("\nPelículas medianas (entre 100 y 200 minutos):");
console.log(peliculasMedianas);
/**
Películas medianas (entre 100 y 200 minutos):
[
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'Terminator', durationInMinutes: 140 },
  { name: 'The Matrix', durationInMinutes: 136 },
  { name: 'Amélie', durationInMinutes: 110 },
  {
    name: 'Eternal Sunshine of the Spotless Mind',
    durationInMinutes: 108
  }
]
 */

console.log("\nPelículas grandes (más de 200 minutos):");
console.log(peliculasGrandes);
/**
Películas grandes (más de 200 minutos):
[
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 }
]
 */