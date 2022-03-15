// import { idiomsArr } from './idiom.data.js';

export function renderIdidom(idiom) {
    const idiomEl = document.createElement('div');
    const idiomString = document.createElement('p');

    idiomEl.classList.add('idioms');
    idiomEl.append(idiomString);

    idiomString.textContent = `"${idiom}"`;

    return idiomEl;
}