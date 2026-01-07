"use strict";

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert('Отменено');
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}

// При помощи цикла for выведите чётные числа от 2 до 10.
for (let i2 = 2; i <= 20; i++) {
  if (i % 2 != 0) continue;
  alert(i)
}

//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i3 = 0;
while (i < 3) {
  alert(`number ${i3}!`);
  i++;
}

let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

//Напишите код, который выводит все простые числа из интервала от 2 до n.
let n = 10;

// Внешний цикл: перебираем ВСЕ числа от 2 до n
for (let i = 2; i <= n; i++) {
  let isPrime = true; // Предполагаем, что число простое
  
  // Внутренний цикл: проверяем делители от 2 до корня из i
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      isPrime = false; // Нашли делитель — число не простое
      break; // Выходим из проверки
    }
  }
  
  // Только ПОСЛЕ проверки всех делителей выводим результат
  if (isPrime) {
    alert(i); // или console.log(i)
  }
}

// task
let browser;
if (browser == 'Edge') alert('у тя эдж');
  else if (browser == 'chrome' || 'firefox' || 'safari' || 'opera') alert('we supp that too');
  else alert('hope som ok');

//task
let number = prompt('введите число')
switch(number) {
  case(0):
    alert(0)
  case(1):
    alert(1)
  case(2):
  case(3):
    alert('2 или 3')
}