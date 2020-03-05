"use strict";

(function () {console.log("Hi"); })();

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function() {
        return this.name + " " + this.surname;
    }
}
function Seat(number, category) {
    this.number = number;
    this.category = category;
    this.getData = function() { 
        return this.number + ", " + this.category;
    }
}
