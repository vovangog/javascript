'use strict';

// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {  
//     name: 'John',
//     age: 25,
//     isMaried: false
// }
// // obj.a = 10;
// // console.log(obj.name);
// console.log(obj['name']);

// let arr = ['plum.png', 'orange.jpd', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

 const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
 
 const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: Boolean
    };

let i = 0;
while (i < 2) {
    const   a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length <50) {
        personalMovieDB.movies[a] = b;
        i++
        console.log('done');
    }  else {
        console.log('error');
        i--;
    }
}
if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count) {
    console.log('Вы киноман')
} else {
    console.log('Произошла ошибка')
}

console.log(personalMovieDB);