const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  function repeatCounter(list) {
    // Completar
    const count = {};
  
  list.forEach(word => {
    count[word] = (count[word] || 0) + 1;
  });
  
  return count;
}

console.log(repeatCounter(words)); //{ code: 4, repeat: 1, eat: 1, sleep: 3, enjoy: 2 }
