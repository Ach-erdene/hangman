import { uiController } from "./uiController.js";
const ui = new uiController();

const pathsHappy = ["https://github.com/Ach-erdene/hangman/blob/main/zurag/3.gif", "https://github.com/Ach-erdene/hangman/blob/main/zurag/4.png"];
const pathAngry = ["https://github.com/Ach-erdene/hangman/blob/main/zurag/5.jpg", "https://github.com/Ach-erdene/hangman/blob/main/zurag/6.png", "https://github.com/Ach-erdene/hangman/blob/main/zurag/46-469365_clip-art-angry-stick-figure-meme-angry-meme.png"];


export function profileNice(){
    ui.Dom.profile.src = pathsHappy[Math.floor(Math.random() * pathsHappy.length)];
}

export function profileBad(){
    ui.Dom.profile.src = pathAngry[Math.floor(Math.random() * pathAngry.length)];
}

export function ehlelProfile(){
    ui.Dom.profile.src = "https://github.com/Ach-erdene/hangman/blob/main/zurag/ready.jpg";
}

export function dieProfile(){
    ui.Dom.profile.src = "https://github.com/Ach-erdene/hangman/blob/main/zurag/dieee.png";
}
