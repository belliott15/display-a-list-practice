// import functions and grab DOM elements
import { candyArr } from './data-candy.js';
import { idiomsArr } from './data-idiom.js';
import { plantArr } from './data-plant.js';
import { songArr } from './data-song.js';
import { renderCandy } from './render-candy.js';
import { renderIdidom } from './render-idiom.js';
import { renderPlant } from './render-plant.js';
import { renderSong } from './render-song.js';
// initialize global state
const candyContainer = document.querySelector('#candy-container');

for (let candy of candyArr){
    let candyList = renderCandy(candy);
    candyContainer.append(candyList);
}

const idiomContainer = document.querySelector('#idiom-container');

for (let idiom of idiomsArr) {
    let idiomList = renderIdidom(idiom);
    idiomContainer.append(idiomList);
}

const plantContainer = document.querySelector('#plant-container');

for (let plant of plantArr){
    let plantList = renderPlant(plant);
    plantContainer.append(plantList);
}

const songContainer = document.querySelector('#song-container');

for (let song of songArr){
    let songList = renderSong(song);
    songContainer.append(songList);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
