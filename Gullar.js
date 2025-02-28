'use strict';

import { data } from "./Gullar_Storage.js";
let main = document.querySelector("section")
let input = document.querySelector("input")
function CreateCard(from) {
    let card = document.createElement("div")
    let images = document.createElement("img")
    let name = document.createElement("h2")
    let cardInfo = document.createElement("p")
    card.classList.add("card")
    images.classList.add("cardImg")
    name.classList.add("title")
    cardInfo.classList.add("cardInfo")
    images.src = from.rasmi
    name.innerHTML = from.nomi
    cardInfo.innerHTML = from.tavsif
    card.appendChild(images)
    card.appendChild(name)
    card.appendChild(cardInfo)
    main.appendChild(card)
}
data.forEach(item => {
    CreateCard(item)
});
input.addEventListener("input", () => {
    let redact = data.filter((Item) =>
        Item.nomi.trim().toLowerCase().includes(input.value.trim().toLowerCase())
    )
    main.innerHTML = ""
    redact.forEach(Item => {
        CreateCard(Item)
    });
})
