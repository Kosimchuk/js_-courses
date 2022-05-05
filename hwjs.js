/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';


let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');


// console.log(typeof(numberOfFilms));


    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

let lastfilm = prompt('Один из последних просмотренных фильмов?', '');
let grade = +prompt("На сколько оцените его?", "");
let secondfilm = prompt('Один из последних просмотренных фильмов?', '');
let grade2 = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastfilm] = grade;
personalMovieDB.movies[secondfilm] = grade2;

console.log(personalMovieDB);


















//задание от Юры

// let yura = [];   let movies = []
// yura[0] = 'Маша'; movie[lastfilm] = grade 
// yura[1] = 'Illia'; 
// console.log(yura);
//                0        1
// let yuuu = ['masga', 'yuuuur']

//создать вопрос - как зовут и отвечать имя

// let user = prompt('как тебя зовут?', '');
// console.log(user);

// //создать объект Илюша и добавить характеристики

// let iluha = {
//     name:'Illia',
//     age: 5,
//     lovelygame: 'car'
// };

// console.log(iluha);
// console.log(iluha['lovelygame']);

// //создать вопрос при сходе на сайт сколько тебе лет и в консоле выводился ответ на вопрос

// let answer = +prompt('сколько тебе лет?', '');
// console.log(answer);

// //создать пустой массив

// let massiv = [];
// massiv[0] = "Я";
// massiv[1] = user;
// massiv[2] = `мне ${answer}`;

// console.log(massiv);
// // ответ от вопроса как тебя зовут
// // слово мне +сколько тебе лет
// //вывести это все в консоль
// //создать объект еоторый будет наз семья в нем будут значения наша семья = пустой массив, 
// //марка семья = ключ мама ира папа антон сын марк и написать еще один ключ в этом объекте украинец - правда

// let family = {
//     ourfamily: {},
//     neighbours: [],
//     nationality: 'ukrainian'
// };

// family.neighbours['father'] = 'anton';
// family.neighbours['mother'] = 'ira';
// family.neighbours['sun'] = 'mark';

// console.log(family);

// //по 3 вопроса: фамилия Ильи? сколько ему лет?
// //фамилия Маши? сколько ей лет
// //фамилия Юры? сколько ему лет?
// let illia = prompt('фамилия Ильи?', '');
// let illiaage = +prompt("сколько ему лет?", "");
// let masha = prompt('фамилия Маши?', '');
// let mashaage = +prompt('сколько ей лет?', '');
// let yura = prompt("фамилия Юры?", "");
// let yuraage = +prompt("сколько ему лет?", "");


// family.ourfamily[illia] = illiaage;
// family.ourfamily[masha] = mashaage;
// family.ourfamily[yura] = yuraage;






