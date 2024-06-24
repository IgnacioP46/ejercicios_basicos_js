const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (let property in alien) {
    console.log(`La propiedad ${property} tiene como valor: ${alien[property]}`);
  }
/**
La propiedad name tiene como valor: Xenomorph
La propiedad species tiene como valor: Xenomorph XX121
La propiedad origin tiene como valor: Unknown
La propiedad weight tiene como valor: 180
 */

