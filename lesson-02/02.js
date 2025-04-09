/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1; // your code
let dice2; // your code
let isWinningDouble; // your code

// Реализация через функцию

// function generateValueDice() {
//   return Math.floor(Math.random() * 6 + 1);
// }

// function isWinning() {
//   dice1 = generateValueDice();
//   dice2 = generateValueDice();

//   let conditionWinning = dice1 === dice2 && dice1 > 3;

//   switch (conditionWinning) {
//     case true:
//       isWinningDouble = true;
//       console.log("Ваш бросок выйгрышный");
//       break;
//     case false:
//       console.log("Ваш бросок обычный");
//       break;
//   }
// }

// isWinning();

dice1 = Math.floor(Math.random() * 6 + 1);
dice2 = Math.floor(Math.random() * 6 + 1);

isWinningDouble = dice1 === dice2 && dice1 > 3;

console.log("Первый бросок: " + dice1);
console.log("Второй бросок: " + dice2);
if (isWinningDouble) {
  console.log("Выигрышный дубль!");
} else {
  console.log("Не выигрышный дубль.");
}
