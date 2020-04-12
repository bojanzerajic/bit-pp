import { getButton } from './ui.js';
import { fetchJoke } from './data.js'

export const init = () => {
    const $btn = getButton();

    $btn.addEventListener('click', fetchJoke);
}