const naviHome = () => {
    document.getElementById("contentFrame").setAttribute("src", "home.html")
    document.getElementById("naviHome").style = "color:black; background-color:white;"
    document.getElementById("naviJuke").style = "color:white; background-color:#298eb5;"
    document.getElementById("naviGame").style = "color:white; background-color:#298eb5;"
}

const naviJuke = () => {
    document.getElementById("contentFrame").setAttribute("src", "jukebox.html")
    document.getElementById("naviJuke").style = "color:black; background-color:white;"
    document.getElementById("naviHome").style = "color:white; background-color:#298eb5;"
    document.getElementById("naviGame").style = "color:white; background-color:#298eb5;"
}

const naviGame = () => {
    document.getElementById("contentFrame").setAttribute("src", "game.html")
    document.getElementById("naviGame").style = "color:black; background-color:white;"
    document.getElementById("naviHome").style = "color:white; background-color:#298eb5;"
    document.getElementById("naviJuke").style = "color:white; background-color:#298eb5;"
}