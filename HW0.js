'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { //не будут отменять, пустую строку оставлять и только цифры 
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },
    showMyDB: function (proverka) {
        if (!proverka){
                console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function (){
        if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
    },
    writeYourGenres: function () {
        for (let i=1; i <= 3; i++){
            let genres = prompt (`Ваш любимый жанр под номером ${i}`);
            if (genres === '' || genres === null) {
                console.log ('error');
                i--;
            }
            personalMovieDB.genres[i] = genres;
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i} - это ${item}`);
        });
    },
    rememberMyFilms: function () {
        for (let i = 1; i <= 2; i ++) {
            const film = prompt('Один из последних просмотренных фильмов?','');
            const grade = +prompt('На сколько оцените его?','');
            
        if (film != '' && film != null && grade != '' && grade != null && film.length<=50) {
                console.log("ok!");
                personalMovieDB.movies[film] = [grade];
            } else {
                console.log("error");
                i --;
                
            }
        }
    },
    detectPersonalLevel: function (){    
        if (personalMovieDB.count < 10) {
            console.log ('росмотрено довольно мало фильмов');
    
        } else  if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            console.log ('Вы классический зритель');
    
        } else if (personalMovieDB.count > 30){
            console.log ('Вы киноман'); 
        } else {
            console.log ('Произошла ошибка');
        }
    }
};
