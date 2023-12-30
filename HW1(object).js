// Способы создания объектов.

// 1 
//const counter = {};

// 2
//const counter = Object.create({});

// 3
//const counter = new Object();

// 4  
//function Counter () {
// }

// const counter = new Counter();

// 5 

//const counter = Object.assign({});

//6 Возможно через JSON.parse, но не уверен, что это создание
// const counter = JSON.parse("{}");

//7 на MDN нашёл метод fromEntries в параметры передаём матрицу из пар ключ-значение метод entries, только наоборот
//const counter = Object.fromEntries([]); 

// Развернуть слово
function reverseStr(str) {
    return str.split('').reverse().join('');
}