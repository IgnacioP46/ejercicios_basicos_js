



function greaterNumber(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        console.log(numberOne);
    } else {
        console.log(numberTwo);
    }
  }

//o tambien usando:
  function greaterNumber(numberOne, numberTwo) {
    return Math.max(numberOne, numberTwo);
}
console.log(greaterNumber(5, 10)); //10
console.log(greaterNumber(20, 15)); //20
