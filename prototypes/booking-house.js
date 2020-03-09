"use strict";

(function () {

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    var CONTINENTS = Object.freeze({
        EUROPE: 'EU',
        ASIA: 'AS',
        AFRICA: 'AF',
        SOUTH_AMERICA: 'SA',
        NORTH_AMERICA: 'NA',
        AUSTRALIA: 'AU'
    });

    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
    }
    Person.prototype.fullData = function () {
        return this.name + " " + this.surname + " " + this.dateOfBirth;
    }


    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }

    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
    }
    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
    }

    // // BettingPlace.prototype.addPlayer() = function(player) {
    // //     this.listOfPlayers.push(player);
    // }

    Address.prototype.fullAddress = function () {
        return this.street + " " + this.number + ", " + this.postalCode + " " + 
    }














})();