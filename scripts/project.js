// Create empty list
const playersElement = document.querySelector('#players');
let playerList = [];

// Add titles
let titlesContainer = document.createElement('div');
titlesContainer.classList.add('titles-container');

let playerTitle = document.createElement('h2');
playerTitle.textContent = `Player`;
titlesContainer.appendChild(playerTitle);

let receptionsTitle = document.createElement('h2');
receptionsTitle.textContent = `Receptions`;
titlesContainer.appendChild(receptionsTitle);

let yardsTitle = document.createElement('h2');
yardsTitle.textContent = `Yards`;
titlesContainer.appendChild(yardsTitle);

let tdsTitle = document.createElement('h2');
tdsTitle.textContent = `TDs`;
titlesContainer.appendChild(tdsTitle);

playersElement.appendChild(titlesContainer);

/* async displayTemples Function */
const displayPlayers = (players) => {
    players.forEach(player => {
        let playerInfoContainer = document.createElement('div');
        playerInfoContainer.classList.add('player-info-container');

        let name = document.createElement('h3');
        name.textContent = player.PlayerName;
        playerInfoContainer.appendChild(name);

        let receptions = document.createElement('h4');
        receptions.textContent = parseInt(player.ReceivingRec);
        receptions.classList.add('receptions');
        playerInfoContainer.appendChild(receptions);

        let yards = document.createElement('h4');
        yards.textContent = parseFloat(player.ReceivingYDS);
        yards.classList.add('yards');
        playerInfoContainer.appendChild(yards);

        let tds = document.createElement('h4');
        tds.textContent = parseInt(player.ReceivingTD);
        tds.classList.add('tds')
        playerInfoContainer.appendChild(tds);

        playersElement.appendChild(playerInfoContainer);
    });
}

/* async getTemples Function using fetch()*/
const getPlayers = async () => {
    const response = await fetch("images/WR_season.json");
    playerList = await response.json();
    displayPlayers(playerList);
}

/* reset Function */
const reset = () => {
        let playerContainers = playersElement.querySelectorAll('.player-info-container');

        playerContainers.forEach(container => {
            container.remove();
        });
};

/* sortBy Function */
const sortBy = (players) => {
    reset();

    const filter = document.querySelector('#sortBy').value;

    let sortedPlayers;

    switch (filter) {
        case 'receptions':
            sortedPlayers = players.slice().sort((a, b) => b.ReceivingRec - a.ReceivingRec);
            break;
        case 'yards':
            sortedPlayers = players.slice().sort((a, b) => b.ReceivingYDS - a.ReceivingYDS);
            break;
        case 'tds':
            sortedPlayers = players.slice().sort((a, b) => b.ReceivingTD - a.ReceivingTD);
            break;
        case 'players':
            sortedPlayers = players.slice().sort((a, b) => a.PlayerName.localeCompare(b.PlayerName));
            break;
        default:
            sortedPlayers = players.slice().sort((a, b) => b.ReceivingYDS - a.ReceivingYDS);
            break;
    }

    displayPlayers(sortedPlayers);
}

getPlayers();

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => { sortBy(playerList) });