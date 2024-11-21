import { uiController } from "./uiController.js";
const ui = new uiController();

const pathsHappy = ["../zurag/3.gif", "../zurag/4.png"];
const pathAngry = ["../zurag/5.jpg", "../zurag/6.png", "../zurag/46-469365_clip-art-angry-stick-figure-meme-angry-meme.png"];


export function profileNice(){
    ui.Dom.profile.src = pathsHappy[Math.floor(Math.random() * pathsHappy.length)];
}

export function profileBad(){
    ui.Dom.profile.src = pathAngry[Math.floor(Math.random() * pathsHappy.length)];
}

export function ehlelProfile(){
    ui.Dom.profile.src = "../zurag/ready.jpg";
}

export function dieProfile(){
    ui.Dom.profile.src = "../zurag/dieee.png";
}