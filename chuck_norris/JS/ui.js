const $content = document.querySelector('.content');

export const renderJoke = (joke) => {
    const $p = document.createElement('p');
    $p.textContent = joke;

    $content.innerHTML = '';
    $content.appendChild($p);
}

export const getButton = () => document.querySelector('button');