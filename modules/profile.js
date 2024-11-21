import { uiController } from "./uiController.js";
const ui = new uiController();

const pathsHappy = ["https://ach-erdene.github.io/zurag/3.gif", "https://ach-erdene.github.io/zurag/4.png"];
const pathAngry = ["https://ach-erdene.github.io/zurag/5.jpg", "https://ach-erdene.github.io/zurag/6.png", "https://ach-erdene.github.io/zurag/46-469365_clip-art-angry-stick-figure-meme-angry-meme.png"];


export function profileNice(){
    ui.Dom.profile.src = pathsHappy[Math.floor(Math.random() * pathsHappy.length)];
}

export function profileBad(){
    ui.Dom.profile.src = pathAngry[Math.floor(Math.random() * pathAngry.length)];
}

export function ehlelProfile(){
    ui.Dom.profile.src = "https://ach-erdene.github.io/zurag/ready.jpg";
}

export function dieProfile(){
    ui.Dom.profile.src = "https://ach-erdene.github.io/zurag/dieee.png";
}
