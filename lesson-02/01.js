/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false;
const isVerifiedUser = true;
const hasSpecialPermission = true;
const hasTemporaryPass = false;

let isAccess;

// Реализация через функцию

// function isUserVerification() {
//   let conditionAccess =
//     (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass);
//   return conditionAccess ? (isAccess = true) : (isAccess = false);
// }

// isUserVerification();

// Реализация через условное ветвление If, Else

// if ((isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)) {
//   isAccess = true;
// } else {
//   isAccess = false;
// }

// Реализация через тернарный оператор

(isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)
  ? (isAccess = true)
  : (isAccess = false);

// Реализация через конструкцию Switch

// let conditionAccess =
//   (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass);

// switch (conditionAccess) {
//   case true:
//     isAccess = true;
//     break;
//   case false:
//     isAccess = false;
//     break;
// }

console.log(isAccess);
// your code
