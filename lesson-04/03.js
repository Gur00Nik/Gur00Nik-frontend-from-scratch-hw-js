/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(array1, array2) {
  //   let result = [];

  //   for (let i = 0; i < array1.length; i++) {
  //     for (let j = 0; j < array2.length; j++) {
  //       if (array1[i] === array2[j]) {
  //         result.push(array1[i]);
  //         break;
  //       }
  //     }
  //   }
  //   return result.filter((item, index) => index === result.indexOf(item));

  let newArray = [...array1, ...array2].filter(
    (item, index) => [...array1, ...array2].indexOf(item) !== index
  );

  return newArray.filter((item1, index1) => newArray.indexOf(item1) === index1);
}

console.log(
  findCommonElements([1, 2, 3, 4, 5, 6, 3, 7], [3, 5, 6, 3, 7, 8, 9])
);
