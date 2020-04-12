import { renderJoke } from './ui.js'

export const fetchJoke = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.chucknorris.io/jokes/random');
    request.send();

    request.addEventListener('load', function () {
        const response = JSON.parse(request.responseText);
        renderJoke(response.value);
    });
}