"use strict";

// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {  
//     name: "John",
//     age: 25,
//     isMaried: false
// }
// // obj.a = 10;
// // console.log(obj.name);
// console.log(obj["name"]);

// let arr = ['plum.png', 'orange.jpd', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

 const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

 const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: Boolean
    };
const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = +prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = +prompt("На сколько оцените его?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);