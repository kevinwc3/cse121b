/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Kevin Clark",
    photo: "images/me.png",
    favoriteFoods: ["Wings", "Pizza", "Pork", "Chicken", "Hot Cheetos"],
    hobbies: ["Basketball", "Lifting", "Analytics", "Hiking", "Swimming"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile["placesLived"].push(
    {
        place: "Baton Rouge, LA",
        length: "2 Years"
    },
    {
        place: "Rexburg, ID",
        length: "18 Years"
    },
    {
        place: "Tempe, AZ",
        length: "2 Years"
    },
    {
        place: "Salt Lake City, UT",
        length: "3 Years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile['name'];
/* Photo with attributes */
document.querySelector('#photo').src = myProfile['photo'];
document.querySelector('#photo').alt = myProfile['name'];
/* Favorite Foods List*/
myProfile['favoriteFoods'].forEach(food => {
    let foodList = document.createElement('li');
    foodList.textContent = food;
    document.querySelector('#favorite-foods').appendChild(foodList);
});

/* Hobbies List */
myProfile['hobbies'].forEach(hobbie => {
    let hobbieList = document.createElement('li');
    hobbieList.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(hobbieList);
});

/* Places Lived DataList */
myProfile['placesLived'].forEach(place => {
    let placeList = document.createElement('dt');
    let lengthList = document.createElement('dd');
    placeList.textContent = place['place'];
    lengthList.textContent = place['length'];
    document.querySelector('#places-lived').appendChild(placeList, lengthList);
});

