import { fetchCocktail } from './data.js';

export let init = () => {
    let btn = document.querySelector('button');
    btn.addEventListener('click', fetchCocktail);
}