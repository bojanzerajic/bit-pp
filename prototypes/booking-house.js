"use strict";



(function () {

    const CONTINENTS = Object.freeze({
        EUROPE: 'EU',
        ASIA: 'AS',
        AFRICA: 'AF',
        SOUTH_AMERICA: 'SA',
        NORTH_AMERICA: 'NA',
        AUSTRALIA: 'AU'
    });
    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }
    const rs = new Country('Serbia', 1.2, CONTINENTS.EUROPE);
    ///////////////////////////////////////////////////////////////////////////////
    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
    }
    Person.prototype.personInfo = function () {
        return `${this.name}  ${this.surname}  ,  ${2020 - (this.dateOfBirth.getFullYear())}  years`;
    }
    Person.prototype.fullData = function () {
        return `${this.name} ${this.surname}  ${this.dateOfBirth}`;
    }
    const bojan = new Person('Bojan', 'Zerajic', '1984-01-21');
    const ksenija = new Person('Ksenija', 'Mijanovic', '1993-05-13');

    ///////////////////////////////////////////////////////////////////////////////////
    function Player(person, betAmount, coun) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = (coun.name[0] + coun.name[1]).toUpperCase();
        this.money = this.betAmount * coun.odds;
    }
    Player.prototype.playerInfo = function () {
        return `${this.country} , ${this.money} eur, ${this.person.personInfo()}`;
    }
    const bojanKockar = new Player(bojan, 300, rs);
    const ksenijaKockar = new Player(ksenija, 500, rs);

    function Address(country, city, postalCode, street, number) {
        this.country = (country.name[0] + country.name[1]).toUpperCase();
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
    }
    Address.prototype.fullAddress = function () {
        return `${this.street} ${this.number} , ${this.postalCode}  ${this.city} , ${this.country}`;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    const knezaMilosa = new Address(rs, 'Beograd', 11000, 'Kneza Milosa', 82);

    function BettingPlace(address) {
        this.listOfPlayers = [];
        this.totalAmount = 0;
    }


    BettingPlace.prototype.bettingPlaceInfo = function () {

        return `${this.address.street} , ${this.address.postalCode}  ${this.address.city} , sum of all bets: ${this.totalAmount} eur`;
    }

    BettingPlace.prototype.addPlayer = function (player) {
        this.listOfPlayers.push(player);
        this.totalAmount += player.betAmount;
    }

    const uplatnoMesto = new BettingPlace(knezaMilosa);

    uplatnoMesto.addPlayer(bojanKockar);
    uplatnoMesto.addPlayer(ksenijaKockar);









})();




