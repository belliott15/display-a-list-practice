export function renderPlant(plantObj){
    const plantEl = document.createElement('div');
    const commonNameEl = document.createElement('h2');
    const speciesNameEl = document.createElement('h5');
    const locationEl = document.createElement('p');
    const careEl = document.createElement('ul');

    plantEl.classList.add('plant');

    commonNameEl.textContent = plantObj.commonName;
    speciesNameEl.textContent = plantObj.speciesName;
    locationEl.textContent = plantObj.location;
    
    for (let care of plantObj.caretaking){
        const careList = document.createElement('li');
        careList.textContent = care;

        careEl.append(careList);
    }

    plantEl.append(commonNameEl, speciesNameEl, locationEl, careEl);

    return plantEl;
}