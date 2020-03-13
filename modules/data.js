import { renderCocktail } from './ui.js';

export const fetchCocktail = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/random.php');
    request.send();
    request.onload = function () {
        let response = JSON.parse(request.responseText);
        console.log(response);

        let cocktails = response.drinks;
        let image = document.createElement('img');
        image.setAttribute("src", cocktails.strDrinkThumb);
        let cocktailName = document.createElement('h3');
        cocktailName.textContent = cocktails.strDrink;
        let div = document.querySelector('.content');
        div.appendChild(image);
        div.appendChild(cocktailName);

    }

}