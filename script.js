// Feature 1 and 1 Bis - Print number of clicks on the footer
var footer = document.querySelector("footer");
var clickTimes = 0;

function onFooterClick() {
    console.log("click numéro " + clickTimes);
    clickTimes += 1;

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
    if (secondCardText.style.color === "green") {
        secondCardText.style.color = "red";
    } else secondCardText.style.color = "green";
};

secondCardBtnEdit.addEventListener("click", onSecondCardEditClick);

// Feature 5 - Double click on navbar deletes the link to Bootstrap. Recover the link if double click again.

let tagLinkBootstrap = document.querySelector("link");
// let navBar = document.querySelector(".navbar")
let navBar = document.querySelector("header")
// console.log(navBar);

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
leftArrowBtn.href="javascript:void(0)"
rigthArrowBtn = document.querySelector("main .container").querySelectorAll("a")[1];


cardsParentNode = document.querySelector(".album .container .row")
console.log(cardsParentNode)

function moveCardsToRight(){
    // event.preventDefault();
    lastCard = cardsParentNode.querySelector("div:nth-child(6)");
    firstCard = cardsParentNode.querySelector("div:nth-child(1)");
    cardsParentNode.insertBefore(lastCard, firstCard);
};

function moveCardsToLeft(){
    lastCard = cardsParentNode.querySelector("div:nth-child(1)");
    firstCard = cardsParentNode.querySelector("div:nth-child(6)");
    cardsParentNode.insertBefore(lastCard, firstCard);
};

leftArrowBtn.addEventListener("click", moveCardsToLeft);
rigthArrowBtn.addEventListener("click", moveCardsToRight);


// Feature 9

let logo = document.querySelector("strong");
let divLogo = document.querySelector(".navbar .container");
let body = document.querySelector("body");

logo.addEventListener("mouseup", onSelectLogo);

function onSelectLogo(){
    document.addEventListener("keypress", logKey);
}

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


// text = window.getSelection()

// function selectText(){
//     let selObj = document.getSelection();
//     let textSelected = selObj.toString();
//     console.log(textSelected);
//     if(textSelected === divLogo){
//         document.addEventListener("keypress", logKey);
//     } else if(textSelected != divLogo){
//         document.removeEventListener("keypress", logKey);
//     }
//     return
// }

// document.addEventListener("mouseup", selectText)

