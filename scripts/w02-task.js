/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Kevin Clark";
let date = new Date();
let currentYear = date.getFullYear();
let profilePicture = 'images/me.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile Image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ['Wings', 'Pizza', 'Tacos', 'Pork', 'Hot Cheetos'];
foodElement.innerHTML += `<br>${favoriteFoods}`;
let cookie = "Chocolate chip cookies";
favoriteFoods.push(cookie);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;
