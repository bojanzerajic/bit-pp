"use strict";

(function () {
    console.log('Hi!\n');
}());

function Genre(name) {
    this.name = name;
    this.getData = function (name) {
        var shortForGenre = '';
        for (var i = 0; i < this.name.length; i++) {
            if (i === 0 || i === this.name.length -1) {
                shortForGenre += this.name[i];
            }
        }

        return shortForGenre;
    }
}

var genreOne = new Genre('Action');
console.log(genreOne.getData());


function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;

    this.getData = function () {
        return
    }
}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.totalNumberofMovies = 0;
}

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.totNumOfMoviesInAllPrograms = 0;
}