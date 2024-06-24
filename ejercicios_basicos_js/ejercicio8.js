const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
  // Completar código
  let longestWord = "";

  for(let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > longestWord.length) {
        longestWord = stringList[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord(avengers)); //Captain A.