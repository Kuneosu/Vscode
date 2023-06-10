const cat_sound = () => {
    let audio = document.querySelector("#cat");
    audio.play();
}

const enableButton = () => {
    let startButton = document.querySelector("#start__Btn");
    startButton.disabled = false;
}

const moveMain = setTimeout(() => {
    let link = './main.html';
    location.href = link;
}, 2000)


