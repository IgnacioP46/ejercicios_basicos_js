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
    return list.filter((item, index) => list.indexOf(item) === index);
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
