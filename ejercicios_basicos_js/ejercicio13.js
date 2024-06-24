const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, nameToFind) {
    // Completar
    if (nameList.includes(nameToFind)) {
        return { 
            exists: true, position: nameList.indexOf(nameToFind)
        };
      } else {
        return {
            exists: false
        };
      }
    }
    
    console.log(nameFinder(names, 'Tony')); // { exists: true, position: 2 }
    console.log(nameFinder(names, 'Natasha')); //{ exists: true, position: 3 }
    console.log(nameFinder(names, 'Wanda')); //{ exists: false }
  