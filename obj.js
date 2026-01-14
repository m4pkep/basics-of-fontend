// объектыОбъект может быть создан с помощью фигурных скобок {…}
// с необязательным списком свойств. Свойство – это пара «ключ: значение»,
// где ключ – это строка
// (также называемая «именем свойства»), а значение может быть чем угодно.

// 2 варианта создания объекта
let user1 = new Object(); // конструктор объекта
let user2 = {}; // литерал объекта


// объект с 2 свойствами и их значениями
let user3 = {
  name: 'John',
  age: 30,
  "likes birds": true,
};

alert(user3.name);
user3.isAdmin = true;
delete user3.age;

//объект объявленный через const может быть изменен
const user4 = {
  name: 'John'
};
user4.name = "Pete";

let user5 = {};
user5["like me"] = true;
delete user5["like me"];

let fruit = prompt("какой взять", "apple");

let bag = {
  [fruit]: 5,
};
alert(bag.apple)

function makeUser(name, age) {
  return {
    name: name,
    age: age
  };
}

let user6 = makeUser("Jack", 30);
alert(user6.name); // Jack

// вместо name: name, можно писать просто name
let q1 = {
  name,
  age: 30,
}

// имена свойств могут быть зарезервированными словами никаких ограничений нет
let q = {
  let: 1,
  const: 234,
};

// оператор для проверки наличия свойства в объекте in
alert("key" in q); // false

for (key in q) {
  alert('smth');
}

// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

// Они хранят свойства (пары ключ-значение), где:

// Ключи свойств должны быть строками или символами (обычно строками).
// Значения могут быть любого типа.
// Чтобы получить доступ к свойству, мы можем использовать:

// Запись через точку: obj.property.
// Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
// Дополнительные операторы:

// Удаление свойства: delete obj.prop.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for for (let key in obj).

//task
let user = {
    name: 'John',
    surname: 'Smith'
};

user.name = 'Peter';
delete user.name;

//task 2
let schedule = {};

function isEmpty(obj) {
    for (key in obj) {
        return false;
    } return true;
}

// task 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

sum = 0;
for (key in salaries) {
    sum += salaries[key];
}   
alert(sum);

//task 4
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function mu(menu) {
    for (key in menu) {
        if (typeof(menu[key]) == Number) {
            menu[key] *= 2;
        }
    }
    return menu;
}