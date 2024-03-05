// Feature 1 and 1 Bis - Print number of clicks on the footer
var footer = document.querySelector("footer");
var clickTimes = 1;

function onFooterClick() {
    console.log("click numéro " + clickTimes);
    clickTimes += 1;
};

footer.addEventListener("click", onFooterClick);

// Feature 2 - Toggle the navbar when clicking on hamburger menu button
let menuBtn = document.querySelector(".navbar-toggler")
let navbarHeader = document.querySelector("#navbarHeader");

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
    secondCardText.style.color = (secondCardText.style.color === "green") ? "" : "green";
};

secondCardBtnEdit.addEventListener("click", onSecondCardEditClick);

// Feature 5 - Double click on navbar deletes the link to Bootstrap. Recover the link if double click again.

let tagLinkBootstrap = document.querySelector("link");
// let navBar = document.querySelector(".navbar")
let navBar = document.querySelector("header")

function navbarClickNuke() {
    if (tagLinkBootstrap.disabled) {
        tagLinkBootstrap.disabled = false
    } else tagLinkBootstrap.disabled = true;
};

navBar.addEventListener("dblclick", navbarClickNuke);

// Feature 6 - if the mouser hovers View in any card, the card gets reduced

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    let viewBtn = card.querySelectorAll(".btn")[0]
    let reduceOnHover = function () {
        let cardText = card.querySelector(".card-text")
        let cardImg = card.querySelector("img")
        console.log(cardImg)

        // cardText.classList.toggle("collapse")

        if (cardImg.style.scale === "") {
            cardText.style.opacity = "0";
            cardImg.style.scale = "20%"
        } else {
            cardImg.style.scale = "";
            cardText.style.opacity = "";
        }
    }

    viewBtn.addEventListener("mouseover", reduceOnHover)
});

// Feature 7 and 8
leftArrowBtn = document.querySelector("main .container").querySelectorAll("a")[0];
rigthArrowBtn = document.querySelector("main .container").querySelectorAll("a")[1];

cardsParentNode = document.querySelector(".album .container .row")

function moveCardsToLeft(e) {
    e.preventDefault()
    const firstCard = cardsParentNode.firstElementChild;
    cardsParentNode.appendChild(firstCard)
};

function moveCardsToRight() {
    const firstCard = cardsParentNode.firstElementChild;
    const lastCard = cardsParentNode.lastElementChild;
    cardsParentNode.insertBefore(lastCard, firstCard);
};

leftArrowBtn.addEventListener("click", moveCardsToLeft);
rigthArrowBtn.addEventListener("click", moveCardsToRight);

// Feature 9

let logo = document.querySelector("strong");
let body = document.querySelector("body");

function logKey(e) {
    let keyPressed = e.key;

    switch (keyPressed) {
        case "a":
            body.removeAttribute("class")
            body.classList.add("col-4");
            break;
        case "y":
            body.removeAttribute("class")
            body.classList.add("col-4", "offset-md-4")
            break;
        case "p":
            body.removeAttribute("class")
            body.classList.add("col-4", "offset-md-8")
            break;
        case "b":
            body.removeAttribute("class")
            break;
    }
}

function onSelection(){
    var selection = window.getSelection().toString();
    var logoText = logo.textContent;

    if (selection == logoText) {
        // The logo was fully selected
        document.addEventListener("keypress", logKey);
    } else { // The selection on the logo is over => Disabling key press
        document.removeEventListener("keypress", logKey);
    }
}

document.addEventListener("selectionchange", onSelection);
