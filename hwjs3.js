/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start (){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false //false - можно показать 
};

// 1 способ решения

// function showMyDB() {
//     if (personalMovieDB.privat === false ){
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();

//2 способ решения
function showMyDB(proverka) {
    if (!proverka) {
        console.log(personalMovieDB);
}}
showMyDB(personalMovieDB.privat);  


function rememberMyFilms(){
    for (let i = 1; i <= 2; i++) {
        let lastfilm = prompt('Один из последних просмотренных фильмов?', '');
        let grade = +prompt('На сколько оцените его?', '');
        if (lastfilm != null && grade != null && lastfilm != '' && grade != '' && lastfilm.length < 50) {
            console.log("ok!");
            personalMovieDB.movies[lastfilm] = grade;
        } else {
            console.log("error");
            i--;
            
        }
    }
}
rememberMyFilms();


//1 способ решения
// function writeYourGenres() {
    // for (let num = 1; num <= 3; num++){
    //     const yourOfFilms = prompt(`Ваш любимый жанр под номером ${num}`, '');
    //     console.log(yourOfFilms);
    //     personalMovieDB.genres[num-1] = yourOfFilms;
    // }
//     }
// writeYourGenres();


function writeYourGenres() { 

    for (let k = 0; k < 1; k++) {
        let yourOfFilms = prompt('Ваш любимый жанр под номером', '');

        if (yourOfFilms != null && yourOfFilms != '') {
            let kus = yourOfFilms.toUpperCase();
            let dud = kus.split(", "); 
            dud.sort();
            personalMovieDB.genres = dud;
        } else {
            k--;
        }    
    }
}

writeYourGenres(); 

//2 способ решения
// function writeYourGenres() {
//     for (let num = 1; num <= 3; num++){
//         personalMovieDB.genres[num-1] = prompt(`Ваш любимый жанр под номером ${num}`);
//     }
//     }
// writeYourGenres();


function detectPersonalLevel(){
    if (personalMovieDB.count <= 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();