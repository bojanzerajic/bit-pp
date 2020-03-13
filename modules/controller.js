import { getButton } from './ui.js';
import { fetchCocktail } from './data.js'

export const init = () => {
    const $btn = getButton();

    $btn.addEventListener('click', fetchCocktail);
}