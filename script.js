// //урок 13

// // if (4 == 9) {

// //     console.log('ok!');
// // } else {
// // console.log("error");
// // }

// // const num = 50;

// // if (num < 49) {
// //     console.log('error');
// // } else if (num>100) {
// //     console.log('много');
// // } else {
// //     console.log('ok!');
// // }


// // const num = 50;
// // (num === 50) ? console.log('ok!') : console.log('error');
// //тернарный оператор: условия которые мы проверяем, которые равны 50, ? если это условие верно, то ок, если нет тогда error


// // const num = 50;
// // switch (num) { // ф-ция в которой мы подставляем конкретное значение и проверяем условия
// //     case 49: 
// //         console.log('неверно');
// //         break;
// //     case 100:
// //         console.log('неверно');
// //         break;
// //     case 50:
// //         console.log('верно');
// //         break;
// //     default:
// //         console.log('не в этот раз');
// //         break;
// // }
// // //проверяем на строгое соответствие

// // //урок 14

// // let num = 50;

// // while (num < 55) { //пока num меньше 55 то делает то что в скобках
// //     console.log(num);
// //     num++; //увеличивать на 1
// // }

// // let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++; //увеличивать на 1
// // }


// // let num = 50;
// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);


// // for (let i = 1; i < 8; i++) {
// //     console.log(i);
// // }
// // //++ инкреминт

// // let num = 50;
// // for (let i = 1; i < 8; i++) {
// //     console.log(num);
// //     num++;
// // }


// // for (let i = 1; i < 10; i++) {
// //     if (i === 6) {
// //         break; // остановка процесса
// //     }
// //     console.log(i);
// // }

// // for (let i = 1; i < 10; i++) {
// //     if (i === 6) {
// //         continue;
// //     }
// //     console.log(i);
// // }


// // Урок 16 ф-ции стрелочные операции

// " use strict ";

// // Function declaration

// function showFirstMessage() {
//     console.log ("Hello World");
// }
// showFirstMessage();

// function showFirstMessage(text) {
//     console.log (text);
// }
// showFirstMessage("Hello World");

// function showFirstMessage(text) {
//     console.log (text);
//     let num = 20; //локальная переменная, тк существует только внутри ф-ции, для того чтобы она работала нужно создать глобальную переменную
// }
// showFirstMessage("Hello World");
// console.log(num);


// let num = 20;  //глобальная переменная, перенесли ее с локальной

// function showFirstMessage(text) {
//     console.log (text);
//     num = 20;
// }
// showFirstMessage("Hello World");
// console.log(num);

// // let num = 20;  //глобальная переменная, перенесли ее с локальной

// // function showFirstMessage(text) {
// //     console.log (text);
// //     let num = 10;
// //     console.log(num);
// // }
// // showFirstMessage("Hello World");
// // console.log(num);


// let num = 20;  //замыкание ф-ции - сама ф-ция вместе со всеми внешними переменными которые ей доступны

// function showFirstMessage(text) {
//     console.log (text);
//     console.log(num);
// }
// showFirstMessage("Hello World");
// console.log(num);

// // function calc(a, b) {
// //     return (a + b);
// // }
// // console.log(calc(4, 3));
// // console.log(calc(5, 6));
// // console.log(calc(10, 6));

// function ret(){
//     let num = 50;
//     return num; 
// }
// const anotherNum = ret();
// console.log(anotherNum);

// // Function expression

// const logger = function() {
// console.log("Hi")
// };
// logger();

// //стрелочная ф-ция

// // const calc = (a, b) => a + b;
// // const calc = (a, b) => { return a + b };

// const calc = (a, b) => {
//     console.log('1');
//     return a+b;
// };

// //урок 17 методы и свойства строк и чисел


// // методы - вспомогательные ф-ции
// //св-ва - вспомогательные з-ния


// //строки

// // const str = 'test';
// // const arr = [1, 2, 3];

// // console.log(str.length); //получить длину строки или к-во элементов
// // console.log(arr.length);

// //методы всегда пишутся с круглыми скобками -  string.prototype()

// const str = 'test';
// const arr = [1, 2, 3];

// // console.log(str[2]); //получить длину строки или к-во элементов

// console.log(str.toUpperCase()); //большие буквы test
// console.log(str.toLowerCase()); //превращает в нижний регистр
// console.log(str); //остаются маленькие буквы

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit")); //показывает с какой позиции начинается текст

// const fruit = "Some fruit";

// console.log(fruit.indexOf("q")); //такой буквы нет, потому будет отображаться -1

// const logg = "Hi World";

// console.log(logg.slice(3, 8)); //чтобы обрезать слово, надо ввести место где оно стоит и место где заканчивается+1
// console.log(logg.substring(3, 8)); //разница только в том, что отрицательные не поддерживает


// const logg = "Hi World";

// console.log(logg.slice(3)); //можно указать только 1 аргумент где начинается буква и обрежится все дальше 

// const logg = "Hi World";

// console.log(logg.slice(-5 -1)); //отрицательное значения начинаются с конца строки


// const logg = "Hi World";
// console.log(logg.substr(3, 5)); //сколько символов необходимо вырезать

// //числа

// const num = 12.2; 
// console.log(Math.round(num)); //округление

// const test = '12.2px';
// console.log(parseInt(test)); //переводить число в другую систему исчесоения, при этом округляет (есть деситичная система есть двоичная и тд)
// console.log(parseFloat(test)); //c дробными значения делает

//урок 19 - функции 
//callbаck

" use strict ";

// function first(){
    //do smthing
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second(){
//         console.log(2);
// }
// first();
// second();

// //callback - ф-ция которая должна быть выполнена после того как другая ф-ция завершила свое выполнение

// function learnJS(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }

// function done(){
//     console.log('я прошел этот урок');
// }

// learnJS('JavaScript', done);

//урок 20 методы объектов (ассоциативные массивы)

// const obj = new Object();

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){ //во внутрь него можем создавать функции
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors; //диструктиризация объектов (то что хотим вытащить из объетов)
// console.log(border);


// // console.log(Object.keys(options));  //методы, которые исп у объектах - obj keys
// console.log(Object.keys(options).length); //к-во эл внутри

// console.log(options.name);

// delete options.name; //если хотим что-то удалить определенное
// console.log(options);
// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]) {
//             console.log(`свойства ${i}  имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//     console.log(`свойства ${key}  имеет значение ${options[key]}`);
//     counter++;
// }
// }
// console.log(counter);

// //21 урок - массивы и псевдомассивы

// const arr = [1, 12, 3, 26, 8];
// // arr.sort(); //из-за того что цифры будет сортироваться по возрастанию как строки, только будет то что с 1 начинается потом с 2

// //чтобы такого не было
// arr.sort(compareNum);
// console.log(arr);
// function compareNum(a, b) { //теперь встанет как надо
//         return a - b;
// }

// arr[99] = 0; //будет 100 элементов, последний индекс +1
// console.log(arr.length); // как соотносится между собой с-во лэнг и порядковые номера эл в этих массивах? 
//                         // св-во лэнг состоит из последнего индекса который есть в массиве +1
// console.log(arr);

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});  // перебор массива

// arr.pop(); //метод pop - удаляет последний элемент с массива
// arr.push(10); // метод push - добавляет элементы
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// for (let value of arr) { //value каждый отдельный элемент внтури массива (назвать мы можем как хотим)
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(", ");
// // products.sort(); //метод сортировки, будет по порядку стоять, внутри массива как строки
// // // console.log(products); 
// // console.log(products.join('; ')); //объеденения эл в массиве

//псевдомассивы - выглядит все так же но нет методов пуш и тд, это просто массивы которые хранят данные

// урок 22 Передача данных по ссылке или по значению, Spread оператор 

// let a = 5, 
//     b = a;

//         b = b + 5;
// console.log(a);
// console.log(b);

// 

// const obj = {
//     a: 5,
//     b: 1
// };
//         const copy = obj; //ccылку передает, а не копию делает (передача по ссылке)
//         copy.a = 10;

// console.log(copy);
// console.log(obj);

///

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj){ //у нас есть ключи внутри объекта mainOb, которые передаются ф-ции
//         objCopy[key] = mainObj[key]; // копирование наших свойств
//     }

//     return objCopy; // c помощью ретун мы возвращаем objCopy наружу

// }
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10; // есть глубокие и поверхностные копии объекта, мы создали поверхностные  - видно, что когда меняем с мы обратились как к ссылки и везде х 10 

// console.log(newNumbers);
// console.log(numbers);
// //
// 2й способ обжект эсайн (соединить сразу несколько объектов)

// const add = {  
//     d: 17,
//     e: 20
// };
//теперь соединим объкт add с 

// console.log(Object.assign(numbers, add)); //- 1 вариант

// const clone = Object.assign({}, add); // 2 вариант
// clone.d = 20;

// console.log(add);
// console.log(clone);

// 3 метод

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); //метод который позволяет скопировать старый массив

// newArray[1] = 'jcdnkjcdjc';
// console.log(newArray);
// console.log(oldArray);

// 4 способ Е6 Е8 оператор разворота - Spread оператор

// const video =  ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'], 
//       internet = [...video, ...blogs, 'vk', 'fb'];

//       console.log(internet);

//     ///
//     function log(a, b, c) {
//             console.log(a);
//             console.log(b);
//             console.log(c);
//     }

//     const num = [2, 5, 7];
//     log(...num);

//     ///

//     const array = ['a', 'b'];
//     const newAarray = [...array];

//     const q = {
//         one: 1,
//         two: 2
//     };
//     const newObj = {...q};

/// урок 23 Основы Объекто - Ориентированное Программирование, прототипно-ориентированное наследование
//ООП - наука как делать правильную архитектуру

let str = 'some';
let strOnj = new String(str); //превращает строку в объект

// console.log(typeof(str));
// console.log(typeof(strOnj));

console.dir([1,2,3]);  //обращения к самому объекту: посмотреть какие есть св-во

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('hi');
    }
};

const john = Object.create(soldier);    

// const john = {   
//     health: 100
// };

// john.__proto__ = soldier; //устаревший формат, его не используют

Object.setPrototypeOf(john, soldier); // вот так надо писать, новый

// console.log(john.armor);
john.sayHello();


