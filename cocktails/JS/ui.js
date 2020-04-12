
export let renderCocktail = (input) => {
    let name = document.createElement('h1');
    name.textContent = input.drinks[0].strDrink;
    let image = document.createElement('img');
    image.setAttribute('src', input.drinks[0].strDrinkThumb);
    let content = document.querySelector('.content');
    content.innerHTML = '';
    content.appendChild(name);
    content.appendChild(image);
}

