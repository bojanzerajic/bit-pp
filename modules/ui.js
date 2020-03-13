const $content = document.querySelector('.content');

export const renderCocktail = (cocktail) => {
    const $p = document.createElement('p');
    $p.textContent = cocktail;

    $content.innerHTML = '';
    $content.appendChild($p);
}

export const getButton = () => document.querySelector('button');