export function renderCandy(candyObj) {
// <div id="candy-container">
//         <h2>Candy Name</h2>
//         <p>sweetness level</p>
//         <p>cost:</p>
//         <p>description</p>
// </div>
    const candyEl = document.createElement('div');
    const candyNameEl = document.createElement('h2');
    const sweetLevelEl = document.createElement('p');
    const costEl = document.createElement('p');
    const descriptionEl = document.createElement('p');
    

    candyEl.classList.add('candy');
    candyEl.style.background = `${candyObj.color}`;

    candyNameEl.textContent = candyObj.name;
    sweetLevelEl.textContent = `Sweetness Level : ${candyObj.sweetness}/5`;
    costEl.textContent = `$${candyObj.cost}.00`;
    descriptionEl.textContent = candyObj.description;

    candyEl.append(candyNameEl, sweetLevelEl, costEl, descriptionEl);

    return candyEl;
}