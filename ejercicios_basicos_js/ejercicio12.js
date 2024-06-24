const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
    // Completar
    let seen = {};
  let arrayFiltrado = list.filter((elemento) => {
    if (seen[elemento]) {
      return false;
    } else {
      seen[elemento] = true;
      return true;
    }
  });
  return arrayFiltrado;
}

// Probar la función con el array proporcionado
console.log(removeDuplicates(duplicates));
/*
[
    'sushi',   'pizza',
    'burger',  'potatoe',
    'pasta',   'ice-cream',
    'chicken', 'onion rings',
    'soda'
  ]
*/