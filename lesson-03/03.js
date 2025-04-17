// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(firstNumber, secondNumber, thirdNumber) {
  return firstNumber >= secondNumber && firstNumber >= thirdNumber
    ? firstNumber
    : secondNumber >= firstNumber && secondNumber >= thirdNumber
    ? secondNumber
    : thirdNumber;
}

console.log(findLargest(3, 3, 2));
