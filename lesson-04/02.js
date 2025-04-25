/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(arr) {
  // let result = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (i === arr.indexOf(arr[i])) result.push(arr[i]);
  // }
  // return result;

  return arr.filter((item, index) => index === arr.indexOf(item));
}

console.log(findUniqueElements([1, 2, 3, 3, 4, 5, 1, 2]));
