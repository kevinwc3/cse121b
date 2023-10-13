/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');
        let name = document.createElement('h3');
        name.textContent = temple.templeName;

        let image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.location;

        article.appendChild(name);
        article.appendChild(image);

        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();

    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
        let articles = templesElement.querySelectorAll('article');

        articles.forEach(article => {
            article.remove();
        });
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();

    const filter = document.querySelector('#sortBy').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => { sortBy(templeList) });