/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания


// start();

    const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false, //false - можно показать 
        start: function (){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
            while (personalMovieDB.coun == '' || personalMovieDB.coun == null || isNaN(personalMovieDB.coun)){
                personalMovieDB.coun = +prompt("Сколько фильмов вы уже посмотрели?", '');
            }
        },
        showMyDB: function (proverka) {
            if (!proverka) {
                console.log(personalMovieDB);
            } 
        },
        toggleVisibleMyDB: function(){
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        },
        rememberMyFilms: function (){
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
        },
        writeYourGenres: function () {
            for (let num = 1; num <= 3; num++){
                const yourOfFilms = prompt(`Ваш любимый жанр под номером ${num}`, '');
                console.log(yourOfFilms);
                personalMovieDB.genres[num-1] = yourOfFilms;
            if (yourOfFilms != null && yourOfFilms != '') {
                } else {
                num --;
                }
            }
                personalMovieDB.genres.forEach(function(num, yourOfFilms) {
                    console.log(`Любимый жанр ${num} - это ${yourOfFilms}`);
            });
        },
            // for (let forEach in personalMovieDB.writeYourGenres) {
            //     console.log(`Любимый жанр ${personalMovieDB.writeYourGenres.num} - это ${personalMovieDB.writeYourGenres.yourOfFilms}`);
            //     console.log(forEach);
            // }
        detectPersonalLevel: function (){
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
        
};
