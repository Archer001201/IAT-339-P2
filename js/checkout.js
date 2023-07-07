"use strict";

// function checkUserStatus() {
//     const userStatus = localStorage.getItem('userStatus');

//     if (!userStatus || userStatus !== 'submitted') {
//         document.querySelector('.popup-overlay').style.display = 'none';
//     }
// }

function setUserStatus() {
    localStorage.setItem('userStatus', 'submitted');
}

function hidePopup() {
    document.querySelector('.popup-overlay').style.display = 'none';
}

function showPopup() {
    document.getElementById("popup").style.display = "block";
}

//   window.addEventListener('load', function() {
//     checkUserStatus();
// }
// );
let numberJuniper = document.getElementById('number_juniper');
let decrementJuniper = document.getElementById('decrement_juniper');
let incrementJuniper = document.getElementById('increment_juniper');

decrementJuniper.addEventListener('click', function() {
    numberJuniper.value = Number(numberJuniper.value) - 1;
});

incrementJuniper.addEventListener('click', function() {
    numberJuniper.value = Number(numberJuniper.value) + 1;
});


let numberAtlas = document.getElementById('number_atlas');
let decrementAtlas = document.getElementById('decrement_atlas');
let incrementAtlas = document.getElementById('increment_atlas');

decrementAtlas.addEventListener('click', function() {
    numberAtlas.value = Number(numberAtlas.value) - 1;
});

incrementAtlas.addEventListener('click', function() {
    numberAtlas.value = Number(numberAtlas.value) + 1;
});