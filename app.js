// import functions and grab DOM elements
import { candyArr } from './candy-data.js';
import { renderCandy } from './render-candy.js';
// initialize global state
const candyContainer = document.querySelector('#candy-container');

for (let candy of candyArr){
    let candyList = renderCandy(candy);
    console.log(candyList);
    candyContainer.append(candyList);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
