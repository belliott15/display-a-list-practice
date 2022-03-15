// import { idiomsArr } from './idiom.data.js';

export function renderIdidom() {
    const idiomEl = document.createElement('div');
    const idiomString = document.createElement('p');

    idiomEl.classList.add('idioms');
    idiomEl.append(idiomString);

    idiomString.textContent = '';

    return idiomEl;
}