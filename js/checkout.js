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
