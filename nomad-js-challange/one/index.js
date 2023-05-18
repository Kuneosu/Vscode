const title = document.querySelector("h1");

const mouseHere = () => {
    title.innerText = "The mouse is Here !";
    title.style.color = "blue";
}

const mouseGone = () => {
    title.innerText = "The mouse is Gone !";
    title.style.color = "green";
}

const windowResized = () => {
    title.innerText = "You just resized !";
    title.style.color = "orange";
}

const rightClick = () => {
    title.innerText = "That was a right click !";
    title.style.color = "red";
}

title.addEventListener("mouseenter", mouseHere);
title.addEventListener("mouseleave", mouseGone);

window.addEventListener("resize", windowResized);
window.addEventListener("contextmenu", rightClick);