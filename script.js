// Feature 1 and 1 Bis - Print number of clicks on the footer
var footer = document.querySelector("footer");
var clickTimes = 0;

function onFooterClick() {
    console.log("click numéro " + clickTimes);
    clickTimes+=1;
    
};

footer.addEventListener("click", onFooterClick); 

// Feature 2 - Toggle the navbar when clicking on hamburger menu button
let menuBtn = document.querySelector(".navbar-toggler")
let navbarHeader = document.querySelector("#navbarHeader");
let menuStatus = false;

function onMenuClick() {
    navbarHeader.classList.toggle("collapse");
};

menuBtn.addEventListener("click", onMenuClick);

// Feature 3 - Changing 1st card text color when clicking on edit button
let btnEdit = document.querySelector(".card-body div div .btn-outline-secondary");
let cardText = document.querySelector(".card-text");

function onEditClick() {
    cardText.style.color = "red";
};

btnEdit.addEventListener("click", onEditClick);

// Feature 4 - Changing 2nd card text color : toggle from green to red
let secondCard = document.querySelectorAll(".card")[1];

let secondCardBtnEdit = secondCard.querySelectorAll(".btn")[1];
let secondCardText = secondCard.querySelector(".card-text");

function onSecondCardEditClick() {
    if (secondCardText.style.color === "green"){
        secondCardText.style.color = "red";
    } else secondCardText.style.color = "green";
};

secondCardBtnEdit.addEventListener("click", onSecondCardEditClick);

// Feature 5 - Double click on navbar deletes the link to Bootstrap. Recover the link if double click again.

let tagLinkBootstrap = document.querySelector("link");
// let navBar = document.querySelector(".navbar")
let navBar = document.querySelector("header")
console.log(navBar);

function navbarClickNuke() {
    if (tagLinkBootstrap.disabled) {
        tagLinkBootstrap.disabled = false
    } else tagLinkBootstrap.disabled = true;
};

navBar.addEventListener("dblclick", navbarClickNuke);

// Feature 6 - if the mouser hovers View in any card, the card gets reduced