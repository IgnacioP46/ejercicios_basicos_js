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
    let count = {};
  for (let i = 0; i < list.length; i++) {
    let word = list[i];
    if (count[word]) {
      count[word]++;
    } else {
      count[word] = 1;
    }
  }
  return count;
}

console.log(repeatCounter(words)); //{ code: 4, repeat: 1, eat: 1, sleep: 3, enjoy: 2 }
  