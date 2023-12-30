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

//7 на MDN нашёл метод fromEntries в параметры передаём двумерный массив из пар ключ-значение.
//Работает как метод entries, только наоборот.
//const counter = Object.fromEntries([]); 


/////////////////////////////////////////////////////////////


//Копируем объекты
//1 const copyCounter = Object.assign({}, counter);

//2 const copyCounter = {...counter};

//3 const copyCounter = JSON.parse(JSON.stringify(counter));

////////////////////////////////////////////////////////////////////

//Создание функции 

//1 const makeCounter = () => {};

//2 const makeCounter = function() {};

//3 function makeCounter() {};

//4 (function makeCounter(){})()

//////////////////////////////////////////////////////////////////////////////
// Развернуть слово
// function reverseStr(str) {
//     return str.split('').reverse().join('');
// }

///////////////////////////////////////////////
//Глубокое копирование 
const obj1 = {
    here: {
        is: "on",
        other: "3"
    },
    object: { name: 1 }
};

const obj2 = {
    here: {
        is: "on",
        other: "2"
    },
    object: { name: 1 }
};

const deepEqual = (obj1, obj2) => {

    const firstKeys = Object.keys(obj1);
    const secondKeys = Object.keys(obj2);

    if (obj1 === null || obj2 === null) return false;

    if (typeof obj1 !== typeof obj2) {
        return false
    }

    if (firstKeys.length !== secondKeys.length) return false;

    for (let i = 0; i < firstKeys.length; i++) {
        if (firstKeys[i] !== secondKeys[i]) return false;
    }

    for (let i = 0; i < firstKeys.length; i++) {

        if (typeof obj1[firstKeys[i]] === 'object' && typeof obj2[secondKeys[i]] === 'object') {
            if (obj1[firstKeys[i]] === null && obj2[secondKeys[i]] === null) continue
            if (deepEqual(obj1[firstKeys[i]], obj2[secondKeys[i]])) continue
            else return false
        } else {
            if (obj1[firstKeys[i]] !== obj2[secondKeys[i]]) return false
        }

    }

    return true;
}

console.log(deepEqual(obj1, obj2))