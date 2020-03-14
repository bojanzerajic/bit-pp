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
    //////////// COUNTRY //////////////
    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }
    const rs = new Country('Serbia', 1.2, CONTINENTS.EUROPE);
    //////////// PERSON //////////////
    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
    }
    Person.prototype.personInfo = function () {
        return `${this.name} ${this.surname}, ${2020 - (this.dateOfBirth.getFullYear())} years`;
    }
    Person.prototype.fullData = function () {
        return `${this.name} ${this.surname}  ${this.dateOfBirth}`;
    }
    const bojan = new Person('Bojan', 'Zerajic', '1984-01-21');
    const ksenija = new Person('Ksenija', 'Mijanovic', '1993-05-13');
    const stefan = new Person('Stefan', 'Pavlovic', '1992-10-21');
    const uros = new Person('Uros', 'Opacic', '1994-01-30');

    function Player(person, betAmount, coun) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = (coun.name[0] + coun.name[1]).toUpperCase();
        this.money = this.betAmount * coun.odds;
    }
    Player.prototype.playerInfo = function () {
        return `${this.country}, ${this.money} eur, ${this.person.personInfo()}`;
    }
    const bojanKockar = new Player(bojan, 300, rs);
    const ksenijaKockar = new Player(ksenija, 500, rs);
    const stefanKockar = new Player(stefan, 800, rs);
    const urosKockar = new Player(uros, 450, rs);


    //////////// ADDRESS //////////////
    function Address(country, city, postalCode, street, number) {
        this.country = (country.name[0] + country.name[1]).toUpperCase();
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
    }
    Address.prototype.fullAddress = function () {
        return `${this.street} ${this.number}, ${this.postalCode} ${this.city}, ${this.country}`;
    }
    Address.prototype.getBasicAddress = function () {
        return `${this.street}, ${this.postalCode} ${this.city}`;
    }

    const knezaMilosa = new Address(rs, 'Beograd', 11000, 'Kneza Milosa', 82);
    const sarajevska = new Address(rs, 'Beograd', 11000, 'Sarajevska', 14);


    //////////// BETTING PLACE //////////////
    function BettingPlace(address) {
        this.listOfPlayers = [];
        this.totalAmount = 0;
        this.address = address;
    }

    BettingPlace.prototype.bettingPlaceInfo = function () {

        return `${this.address.getBasicAddress()}, sum of all bets: ${this.totalAmount} eur`;
    }

    BettingPlace.prototype.addPlayer = function (player) {
        this.listOfPlayers.push(player);
        this.totalAmount += player.betAmount;
    }
    BettingPlace.prototype.getPlayers = function () {
        let playersString = '';
        this.listOfPlayers.forEach((player) => {
            playersString += '\n\t\t' + player.playerInfo();
        })
        return playersString;

    }

    const uplatnoMestoJedan = new BettingPlace(knezaMilosa);
    const uplatnoMestoDva = new BettingPlace(sarajevska);

    uplatnoMestoJedan.addPlayer(bojanKockar);
    uplatnoMestoJedan.addPlayer(ksenijaKockar);
    uplatnoMestoDva.addPlayer(stefanKockar);
    uplatnoMestoDva.addPlayer(urosKockar);

    uplatnoMestoJedan.getPlayers();

    //////////// BETTING HOUSE //////////////
    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = 0;
    }
    BettingHouse.prototype.addBettingPlace = function (bettingPlace) {
        this.listOfBettingPlaces.push(bettingPlace);
        this.numberOfPlayers += bettingPlace.listOfPlayers.length;
    }

    BettingHouse.prototype.fullData = function () {
        let bettingHouseString = '';
        let numberOfBetsOnSerbia = 0;
        this.listOfBettingPlaces.forEach((place) => {
            bettingHouseString += '\n\t' + place.bettingPlaceInfo() + place.getPlayers();
        })
        

        return `${this.competition}, ${this.listOfBettingPlaces.length} betting places, ${this.numberOfPlayers} bets
        ${bettingHouseString}`;

    }


    const soccerBetKladionica = new BettingHouse('Basketball World Cup Winner');
    soccerBetKladionica.addBettingPlace(uplatnoMestoJedan);
    soccerBetKladionica.addBettingPlace(uplatnoMestoDva);



    console.log(soccerBetKladionica.fullData());


})();




