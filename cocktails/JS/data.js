import { renderCocktail } from './ui.js';

export let fetchCocktail = () => {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/random.php');
    request.send();

    request.onload = function () {
        let response = JSON.parse(request.responseText);
        console.log(response);
        renderCocktail(response);
    }
};

