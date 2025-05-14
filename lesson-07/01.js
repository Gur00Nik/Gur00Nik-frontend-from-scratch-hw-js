/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  // return str
  //   .split(" ")
  //   .map((i) => `${i[0].toUpperCase()}${i.slice(1).toLowerCase()}`)
  //   .join(" ");
  let result = "";
  let arrWords = str.split(" ");
  for (let i = 0; i < arrWords.length; i++) {
    result += `${arrWords[i][0].toUpperCase()}${arrWords[i]
      .slice(1)
      .toLowerCase()} `;
  }
  return result.trim();
}
