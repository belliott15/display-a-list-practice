// import functions and grab DOM elements
import { candyArr } from './candy-data.js';
import { idiomsArr } from './Idiom-data.js';
import { renderCandy } from './render-candy.js';
import { renderIdidom } from './render-idiom.js';
// initialize global state
const candyContainer = document.querySelector('#candy-container');

for (let candy of candyArr){
    let candyList = renderCandy(candy);
    console.log(candyList);
    candyContainer.append(candyList);
}

const idiomContainer = document.querySelector('#idiom-container');

for (let idiom of idiomsArr) {
    let idiomList = renderIdidom(idiom);
    idiomContainer.append(idiomList);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
